using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.DTOs.Review
{
    public class UpdateReviewRequestDto
    {
        public int ReviewId { get; set; }

        public int Rating { get; set; }

        public string? Comment { get; set; }
    }
}
