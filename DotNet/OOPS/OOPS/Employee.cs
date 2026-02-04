using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS
{
    public class Employee : Person
    {
        public double salary { get; set; }

        public Employee(string FirstName, string LastName, string 
            Email, DateTime DateofBirth, double salary):
            base(FirstName, LastName, Email, DateofBirth)
        {
            salary = salary;
        }

    }
}
