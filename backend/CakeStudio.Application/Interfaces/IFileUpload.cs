using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Interfaces
{
    public interface  IFileUpload
    {
        Task<string> UploadFileAsync(IFormFile image, string type);
        string GetImageUrl(string relativePath);
    }
}
