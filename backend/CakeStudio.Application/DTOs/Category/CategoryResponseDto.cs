using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Category
{
    public class CategoryResponseDto
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; } = string.Empty;
         public bool isActive { get; set; } = true;
        public string imageUrl { get; set; } = string.Empty;

        public DateTime? createdOn { get; set; }

        public DateTime? updatedOn { get; set; }
        public String? updatedBy
        {
            get; set;
        }
        public string? createdBy { get; set; }


    }
}
