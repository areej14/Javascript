export var ch = 0;
export var qPoints = 0;

export  function calculateGPA(cHours, Marks) {
    //conditions of credit hour 1
    if (cHours == 1) {
        if (Marks >= 8 && Marks <= 20) {
            if (Marks == 8) {
                qPoints += 1;
                ch += cHours;

            }
            else if (Marks == 9) {
                qPoints += 1.5;
                ch += cHours;

            }
            else if (Marks == 10) {
                qPoints += 2;
                ch += cHours;

            }
            else if (Marks == 11) {
                qPoints += 2.33;
                ch += cHours;

            }
            else if (Marks == 12) {
                qPoints += 2.67;
                ch += cHours;
            }
            else if (Marks == 13) {
                qPoints += 3;
                ch += cHours;
            }
            else if (Marks == 14) {
                qPoints += 3.33;
                ch += cHours;
            }
            else if (Marks == 15) {
                qPoints += 3.67;
                ch += cHours;
            }
            else {
                qPoints += 4;
                ch += cHours;
            }
        }
        else {
            ch += 0;
        }
    }
    // conditions of credit hour 2
    else if (cHours == 2) {
        if (Marks >= 16 && Marks <= 40) {
            if (Marks == 16) {
                qPoints += 2;
                ch += cHours;
            }
            else if (Marks == 17) {
                qPoints += 2.5;
                ch += cHours;
            }
            else if (Marks == 18) {
                qPoints += 3;
                ch += cHours;
            }
            else if (Marks == 19) {
                qPoints += 3.5;
                ch += cHours;
            }
            else if (Marks == 20) {
                qPoints += 4;
                ch += cHours;
            }
            else if (Marks == 21) {
                qPoints += 4.33;
                ch += cHours;
            }
            else if (Marks == 22) {
                qPoints += 4.67;
                ch += cHours;
            }
            else if (Marks == 23) {
                qPoints += 5;
                ch += cHours;
            }
            else if (Marks == 24) {
                qPoints += 5.33;
                ch += cHours;
            }
            else if (Marks == 25) {
                qPoints += 5.67;
                ch += cHours;
            }
            else if (Marks == 26) {
                qPoints += 6;
                ch += cHours;
            }
            else if (Marks == 27) {
                qPoints += 6.33;
                ch += cHours;
            }
            else if (Marks == 28) {
                qPoints += 6.67;
                ch += cHours;
            }
            else if (Marks == 29) {
                qPoints += 7;
                ch += cHours;
            }
            else if (Marks == 30) {
                qPoints += 7.33;
                ch += cHours;
            }
            else if (Marks == 31) {
                qPoints += 7.67;
                ch += cHours;
            }
            else {
                qPoints += 8;
                ch += cHours;
            }


        }
        else {
            qPoints += 0;
            ch += 0;
        }
    }
    //conditions of credit hour 3
    else if (cHours == 3) {
        if (Marks >= 24 && Marks <= 60) {
            if (Marks == 24) {
                qPoints += 3;
                ch += cHours;
            }
            else if (Marks == 25) {
                qPoints += 3.5;
                ch += cHours;
            }
            else if (Marks == 26) {
                qPoints += 4;
                ch += cHours;
            }
            else if (Marks == 27) {
                qPoints += 4.5;
                ch += cHours;
            }
            else if (Marks == 28) {
                qPoints += 5;
                ch += cHours;
            }
            else if (Marks == 29) {
                qPoints += 5.5;
                ch += cHours;
            }
            else if (Marks == 30) {
                qPoints += 6;
                ch += cHours;
            }
            else if (Marks == 31) {
                qPoints += 6.33;
                ch += cHours;
            }
            else if (Marks == 32) {
                qPoints += 6.67;
                ch += cHours;
            }
            else if (Marks == 33) {
                qPoints += 7;
                ch += cHours;
            }
            else if (Marks == 34) {
                qPoints += 7.33;
                ch += cHours;
            }
            else if (Marks == 35) {
                qPoints += 7.67;
                ch += cHours;

            }
            else if (Marks == 36) {
                qPoints += 8;
                ch += cHours;
            }
            else if (Marks == 37) {
                qPoints += 8.33;
                ch += cHours;
            }
            else if (Marks == 38) {
                qPoints += 8.67;
                ch += cHours;
            }
            else if (Marks == 39) {
                qPoints += 9;
                ch += cHours;
            }
            else if (Marks == 40) {
                qPoints += 9.33;
                ch += cHours;
            }
            else if (Marks == 41) {
                qPoints += 9.67;
                ch += cHours;
            }
            else if (Marks == 42) {
                qPoints += 10;
                ch += cHours;
            }
            else if (Marks == 43) {
                qPoints += 10.33;
                ch += cHours;
            }
            else if (Marks == 44) {
                qPoints += 10.67;
                ch += cHours;
            }
            else if (Marks == 45) {
                qPoints += 11;
                ch += cHours;
            }
            else if (Marks == 46) {
                qPoints += 11.33;
                ch += cHours;
            }
            else if (Marks == 47) {
                qPoints += 11.67;
                ch += cHours;
            }
            else {
                qPoints += 12;
                ch += cHours;


            }
        } else {
            ch += 0;
        }
    }
    //conditions of credit hour 4
    else if (cHours == 4) {
        if (Marks >= 32 && Marks <= 80) {
            if (Marks == 32) {
                qPoints += 4;
                ch += cHours;
            }
            else if (Marks == 33) {
                qPoints += 4.5;
                ch += cHours;
            }
            else if (Marks == 34) {
                qPoints += 5;
                ch += cHours;
            }
            else if (Marks == 35) {
                qPoints += 5.5;
                ch += cHours;
            }
            else if (Marks == 36) {
                qPoints += 6;
                ch += cHours;
            }
            else if (Marks == 37) {
                qPoints += 6.5;
                ch += cHours;
            }
            else if (Marks == 38) {
                qPoints += 7;
                ch += cHours;
            }
            else if (Marks == 39) {
                qPoints += 7.5;
            }
            else if (Marks == 40) {
                qPoints += 8;
                ch += cHours;
            }
            else if (Marks == 41) {
                qPoints += 8.33;
                ch += cHours;
            }
            else if (Marks == 42) {
                qPoints += 8.67;
                ch += cHours;
            }
            else if (Marks == 43) {
                qPoints += 9;
                ch += cHours;
            }
            else if (Marks == 44) {
                qPoints += 9.33;
                ch += cHours;
            }
            else if (Marks == 45) {
                qPoints += 9.67;
                ch += cHours;
            }
            else if (Marks == 46) {
                qPoints += 10;
                ch += cHours;
            }
            else if (Marks == 47) {
                qPoints += 10.33;
                ch += cHours;
            }
            else if (Marks == 48) {
                qPoints += 10.67;
                ch += cHours;
            }
            else if (Marks == 49) {
                qPoints += 11;
                ch += cHours;
            }
            else if (Marks == 50) {
                qPoints += 11.33;
                ch += cHours;
            }
            else if (Marks == 51) {
                qPoints += 11.67;
                ch += cHours;
            }
            else if (Marks == 52) {
                qPoints += 12;
                ch += cHours;
            }
            else if (Marks == 53) {
                qPoints += 12.33;
                ch += cHours;
            }
            else if (Marks == 54) {
                qPoints += 12.67;
                ch += cHours;
            }
            else if (Marks == 55) {
                qPoints += 13;
                ch += cHours;
            }
            else if (Marks == 56) {
                qPoints += 13.33;
                ch += cHours;
            }
            else if (Marks == 57) {
                qPoints += 13.67;
                ch += cHours;
            }
            else if (Marks == 58) {
                qPoints += 14;
                ch += cHours;
            }
            else if (Marks == 59) {
                qPoints += 14.33;
                ch += cHours;
            }
            else if (Marks == 60) {
                qPoints += 14.67;
                ch += cHours;
            }
            else if (Marks == 61) {
                qPoints += 15;
                ch += cHours;
            }
            else if (Marks == 62) {
                qPoints += 15.33;
                ch += cHours;
            }
            else if (Marks == 63) {
                qPoints += 15.67;
                ch += cHours;
            }
            else {
                qPoints += 16;
                ch += cHours;
            }


        }
        else {
            cha += 0;
        }
    }
    //conditions of credit hours 5
    else if (cHours == 5) {
        if (Marks >= 40 && Marks <= 100) {
            if (Marks == 40) {
                qPoints += 5;
                ch += cHours;
            }
            else if (Marks == 41) {
                qPoints += 5.5;
                ch += cHours;
            }
            else if (Marks == 42) {
                qPoints += 6;
                ch += cHours;
            }
            else if (Marks == 43) {
                qPoints += 6.5;
                ch += cHours;
            }
            else if (Marks == 44) {
                qPoints += 7;
                ch += cHours;
            }
            else if (Marks == 45) {
                qPoints += 7.5;
                ch += cHours;
            }
            else if (Marks == 46) {
                qPoints += 8;
                ch += cHours;
            }
            else if (Marks == 47) {
                qPoints += 8.5;
                ch += cHours;
            }
            else if (Marks == 48) {
                qPoints += 9;
                ch += cHours;
            }
            else if (Marks == 49) {
                qPoints += 9.5;
                ch += cHours;
            }
            else if (Marks == 50) {
                qPoints += 10;
                ch += cHours;
            }
            else if (Marks == 51) {
                qPoints += 10.33;
                ch += cHours;
            }
            else if (Marks == 52) {
                qPoints += 10.67;
                ch += cHours;
            }
            else if (Marks == 53) {
                qPoints += 11;
                ch += cHours;
            }
            else if (Marks == 54) {
                qPoints += 11.33;
                ch += cHours;
            }
            else if (Marks == 55) {
                qPoints += 11.67;
                ch += cHours;
            }
            else if (Marks == 56) {
                qPoints += 12;
                ch += cHours;
            }
            else if (Marks == 57) {
                qPoints += 12.33;
                ch += cHours;
            }
            else if (Marks == 58) {
                qPoints += 12.67;
                ch += cHours;
            }
            else if (Marks == 59) {
                qPoints += 13;
                ch += cHours;
            }
            else if (Marks == 60) {
                qPoints += 13.33;
                ch += cHours;
            }
            else if (Marks == 61) {
                qPoints += 13.67;
                ch += cHours;
            }
            else if (Marks == 62) {
                qPoints += 14;
                ch += cHours;
            }
            else if (Marks == 63) {
                qPoints += 14.33;
                ch += cHours;
            }
            else if (Marks == 64) {
                qPoints += 14.67;
                ch += cHours;
            }
            else if (Marks == 65) {
                qPoints += 15;
                ch += cHours;
            }
            else if (Marks == 66) {
                qPoints += 15.33;
                ch += cHours;
            }
            else if (Marks == 67) {
                qPoints += 15.67;
                ch += cHours;
            }
            else if (Marks == 68) {
                qPoints += 16;
                ch += cHours;
            }
            else if (Marks == 69) {
                qPoints += 16.33;
                ch += cHours;
            }
            else if (Marks == 70) {
                qPoints += 16.67;
                ch += cHours;
            }
            else if (Marks == 71) {
                qPoints += 17;
                ch += cHours;
            }
            else if (Marks == 72) {
                qPoints += 17.33;
                ch += cHours;
            }
            else if (Marks == 73) {
                qPoints += 17.67;
                ch += cHours;
            }
            else if (Marks == 74) {
                qPoints += 18;
                ch += cHours;
            }
            else if (Marks == 75) {
                qPoints += 18.33;
                ch += cHours;
            }
            else if (Marks == 76) {
                qPoints += 18.67;
                ch += cHours;
            }
            else if (Marks == 77) {
                qPoints += 19;
                ch += cHours;
            }
            else if (Marks == 78) {
                qPoints += 19.33;
                ch += cHours;
            }
            else if (Marks == 79) {
                qPoints += 19.67;
                ch += cHours;
            }
            else {
                qPoints += 20;
                ch += cHours;
            }
        }
        else {
            ch += 0;
        }
    }


    else {
        alert(`Invalid Credit Hour ${cHours}`)
        ch += 0;
    }
}


