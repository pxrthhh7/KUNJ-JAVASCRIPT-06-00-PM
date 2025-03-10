function submit ()
{
    let unit = document.getElementById("Unit").value
    let bill = ""

    if (unit > 50) // 450 > 0       * Bill Amount = ( bill = 505 ) *
    {
        bill = 50*0.50 // bill = 25
        unit=unit-50 // Unit = 400

        if (unit >= 100) // 400 > 100
        {
            bill = bill + 100*0.75 // bill = 100
            unit=unit-100 // Unit = 300
            
            if (unit >= 150) // 300 >= 150
            {
                bill = bill + 150*1.20 // bill = 280
                unit=unit-150 // Unit = 150

                if (unit >= 1) // 150 > 1
                {
                    bill = bill + unit*1.50 // bill = 505  * (Program Successfully Terminate !) *
                    unit=0
                }
            }
            else
            {
                bill = bill + unit*1.20
                unit = 0 
            }
        }
        else
        {
            bill = bill + unit*0.75
            unit = 0
        }
    } 
    else 
    {
        bill = unit*0.50
        unit = 0
    }


    let surcharge = bill * 0.20 // surcharge
    let finalBill = bill + surcharge // bill after add surcharges

    document.getElementById("Result1").textContent = "Your Surcharge is : " + surcharge
    document.getElementById("Result2").textContent = "Your Final Bill including Surcharge is : " + finalBill
}