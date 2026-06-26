using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Cake
{
    public class CakeListResponseDto
    {
        public int CakeId { get; set; }

        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public string? Category { get; set; }

        public string? ImageUrl { get; set; }

        public int StockQuantity { get; set; }
    }
    public class PagedResult<T>
    {
        public int Page { get; set; }

        public int PageSize { get; set; }

        public int TotalRecords { get; set; }

        public int TotalPages { get; set; }

        public List<T> Data { get; set; } = new();
    }
}
