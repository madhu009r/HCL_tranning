using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS
{
    public class HourlyEmployee : Employee,IPayable
    {
        public double HoursWorked { get; set; }
        public double PayperHour { get; set; }

        public HourlyEmployee (string FirstName, string LastName, String Email,
            DateTime DateofBirth, double HoursWorked, double PayperHour): base(FirstName, LastName, Email,DateofBirth,0)
        {
            HoursWorked = HoursWorked;
            PayperHour = PayperHour;
        }
        public double CalculatePay()
        {
            return HoursWorked * PayperHour;
        }
    }
}
