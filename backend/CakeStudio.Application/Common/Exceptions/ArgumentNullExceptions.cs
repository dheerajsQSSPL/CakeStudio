using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CakeStudio.Application.Common.Exceptions
{
    public class ArgumentNullException : BadRequestException
    {
        public ArgumentNullException(string msg) : base(msg)
        {

        }
    }
}
