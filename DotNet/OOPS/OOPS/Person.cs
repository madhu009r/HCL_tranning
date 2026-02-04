using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS
{
     public class Person
    {
        private string FirstName;
        private string LastName;
        private string Email;
        private DateTime DateofBirth;

        public Person(string FirstName, string LastName,
            string Email, DateTime DateofBirth) { 
        
            this.FirstName= FirstName;
            this.LastName= LastName;
            this.Email= Email;
            this.DateofBirth= DateofBirth;
        }

        public bool IsAdult
        {
            get
            {
                int age = DateTime.Today.Year - DateofBirth.Year;
                if(DateofBirth > DateTime.Today.AddYears(-age))
                {
                    age--;
                }
                return age>=18;
            }
        }

        public string SunSign
        {
            get
            {
                int day = DateofBirth.Day;
                int month = DateofBirth.Month;

                return month switch
                {
                    1 => (day <= 19) ? "Capricorn" : "Aquarius",
                    2 => (day <= 18) ? "Aquarius" : "Pisces",
                    3 => (day <= 20) ? "Pisces" : "Aries",
                    4 => (day <= 19) ? "Aries" : "Taurus",
                    5 => (day <= 20) ? "Taurus" : "Gemini",
                    6 => (day <= 20) ? "Gemini" : "Cancer",
                    7 => (day <= 22) ? "Cancer" : "Leo",
                    8 => (day <= 22) ? "Leo" : "Virgo",
                    9 => (day <= 22) ? "Virgo" : "Libra",
                    10 => (day <= 22) ? "Libra" : "Scorpio",
                    11 => (day <= 21) ? "Scorpio" : "Sagittarius",
                    12 => (day <= 21) ? "Sagittarius" : "Capricorn",
                    _ => "Unknown"
                };

            }
        }

        public bool IsBirthday
        {
            get
            {
                return DateofBirth.Day == DateTime.Today.Day &&
                    DateofBirth.Month == DateTime.Today.Month;
            }
        }

        public string ScreenName
        {
            get
            {
                return FirstName.ToLower()+
                    LastName.ToLower().Substring(0,1)+
                    DateofBirth.ToString("mmddyy");
            }
        }

    }
}
