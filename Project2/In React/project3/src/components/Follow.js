import React from "react"

export default function follow(){
    <div>

    <img src="IMAGES/image.png" alt=""/>
    <h1>Registration Form</h1><br/><br/>
    <form class="form" >
        <label for="fname">First name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="fname" placeholder="First name"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="sname">Last Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="sname" placeholder="Last name"/><br/><br/><br/>
        <label for="email">Email Id:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="email" name="email" placeholder="Email id"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="sname">Phone No:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" name="phone" placeholder="Phone No"/><br/><br/><br/>
        <label for="email">Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" name="Age" placeholder="Age"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="Gender">Gender : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="Gender" placeholder="Gender"/><br/><br/><br/>
        <label for="email">Height :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="email" name="email" placeholder="Height (in cms)"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label for="sname">Weight :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" name="phone" placeholder="Weight (in kgs)"/><br/><br/><br/>
        {/* <!--here onwards adding radiobuttons and stuff--> */}
        <div class="mid"><strong>Select the exercises you want to apply for:</strong></div><br/><br/>
        <div class="exercise">
            <input type="radio" name="yoga" class="exercise" id="yoga"/>&nbsp;
            <label for="yoga">Yoga</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Pilates" id="yoga1"/>&nbsp;
            <label for="yoga">Pilates</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/
            <input type="radio" name="Cardio" id="yoga2"/>&nbsp;
            <label for="yoga">Cardio</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Zumba" id="yoga3"/>&nbsp;
            <label for="yoga">Zumba</label><br/><br/><br/>
        </div>
        <div class="exercise">
            <input type="radio" name="Gyming" class="exercise" id="yoga4"/>&nbsp;
            <label for="yoga">Gyming</label>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Running" id="yoga5"/>&nbsp;
            <label for="yoga">Running</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Stamina" id="yoga6"/>&nbsp;
            <label for="yoga">Stamina</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Diet" id="yoga7"/>&nbsp;
            <label for="yoga">Diet</label><br/><br/><br/>
        </div>
        <div class="button">
            <a href="something.html"><button>"Proceed to Payment</button></a>
        </div>     
        </form>
        </div>
    }