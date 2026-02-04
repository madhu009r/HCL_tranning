using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPS2
{
     class Polymorphism
    {
        // Area of Circle
        public double CalculateArea(double radius)
        {
            return Math.PI * radius * radius;
        }

        // Area of Rectangle
        public double CalculateArea(double length, double breadth)
        {
            return length * breadth;
        }

        // Area of Triangle
        public double CalculateArea(double baseValue, double height, bool isTriangle)
        {
            return 0.5 * baseValue * height;
        }
    }
}
