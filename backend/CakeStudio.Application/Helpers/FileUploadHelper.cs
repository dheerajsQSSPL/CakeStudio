using CakeStudio.Application.Common.Exceptions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Helpers
{
    public static class FileUploadHelper
    {
        public static async Task<String> UploadImageAsync(IFormFile image, string type)
        {
            const long maxFileSize = 5 * 1024 * 1024; // 5 MB
            if (image == null || image.Length == 0 || string.IsNullOrWhiteSpace(type))
            {
                throw new BadRequestException(nameof(image));
            }
            

            if (image.Length > maxFileSize)
            {
                throw new BadRequestException("Image size cannot exceed 5 MB.");
            }

            string[] allowedExtension =
            {
                ".jpg",".png",".jpeg",".webp"
            };

            var extension = Path.GetExtension(image.FileName).ToLowerInvariant();

            if (!allowedExtension.Contains(extension))
            {
                throw new BadRequestException("Only JPG, JPEG, PNG and WEBP images are allowed.");
            }

            var filename = $"{Guid.NewGuid()}{extension}";

            var folderpath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", type.ToLower());

            if (!Directory.Exists(folderpath))
            {
                Directory.CreateDirectory(folderpath);
            }

            var filepath = Path.Combine(folderpath, filename);

            using var stream = new FileStream(filepath, FileMode.Create);

            await image.CopyToAsync(stream);

            return $"uploads/{type.ToLower()}/{filename}";
        }
        public static string GetPhysicalPath(string imageUrl)
        {
            if (string.IsNullOrWhiteSpace(imageUrl))
                throw new ArgumentException(nameof(imageUrl));

            imageUrl = imageUrl.TrimStart('/')
                               .Replace('/', Path.DirectorySeparatorChar);

            return Path.Combine(
                Directory.GetCurrentDirectory(),
                "wwwroot",
                imageUrl);
        }

        public static bool ImageExists(string imageUrl)
        {
            return File.Exists(GetPhysicalPath(imageUrl));
        }

        public static bool DeleteImage(string imageUrl)
        {
            var path = GetPhysicalPath(imageUrl);

            if (!File.Exists(path))
                return false;

            File.Delete(path);

            return true;
        }

        public static string GetImageUrl(HttpRequest request, string relativePath)
        {
            return $"{request.Scheme}://{request.Host}{relativePath}";
        }
    }
}
