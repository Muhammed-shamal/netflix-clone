#include <iostream>
using namespace std;

int main()
{
    int array[6] = {2, 5, 10, 1};
    // 0,1,2,3,4,5

    int length = sizeof(array) / sizeof(array[0]);

    for (int i = 0; i < length - 1; i++)
    {
        int firstelem = array[i];

        for (int j = i + 1; j < length; j++) // 0 + 1 = 1;
        {
            if (array[j] < firstelem)
            {
                firstelem = array[j];
                int temp = array[i];
            }
        }
    }
}