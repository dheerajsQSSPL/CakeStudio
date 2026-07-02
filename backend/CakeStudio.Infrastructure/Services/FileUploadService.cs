using CakeStudio.Application.Common.Exceptions;
using CakeStudio.Application.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Infrastructure.Services
{
    public class FileUploadService : IFileUpload
    {
        private readonly IWebHostEnvironment _environment;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public FileUploadService(IWebHostEnvironment environment, IHttpContextAccessor httpContextAccessor)
        {
            _environment = environment;
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetImageUrl(string relativePath)
        {
            var httpContext = _httpContextAccessor.HttpContext;
            if (httpContext == null)
            {
                return relativePath;
            }
            var request = httpContext.Request;

            return $"{request.Scheme}://{request.Host}/{relativePath}";
        }

        public async Task<string> UploadFileAsync(IFormFile image, string type)
        {
            const long maxFileSize = 5 * 1024 * 1024; // 5 MB

            if (image == null || image.Length == 0 || string.IsNullOrWhiteSpace(type))
            {
                throw new BadRequestException("Image is required.");
            }

            if (image.Length > maxFileSize)
            {
                throw new BadRequestException("Image size cannot exceed 5 MB.");
            }

            string[] allowedExtensions =
            {
            ".jpg",
            ".jpeg",
            ".png",
            ".webp"
        };

            var extension = Path.GetExtension(image.FileName).ToLowerInvariant();

            if (!allowedExtensions.Contains(extension))
            {
                throw new BadRequestException("Only JPG, JPEG, PNG and WEBP images are allowed.");
            }

            var fileName = $"{Guid.NewGuid()}{extension}";

            var folderPath = Path.Combine(
                _environment.WebRootPath,
                "uploads",
                type.ToLowerInvariant());

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var filePath = Path.Combine(folderPath, fileName);

            using var stream = new FileStream(filePath, FileMode.Create);

            await image.CopyToAsync(stream);

            return $"uploads/{type.ToLowerInvariant()}/{fileName}";
        }

    }
}
