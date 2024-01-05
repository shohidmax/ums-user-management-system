import React from 'react';
import toast from 'react-hot-toast';

const Adduser = () => {
    const imageStorageKey='7dec4c10f51e1e22708ccd12b0590a32';
    const country = [
        {
         "sn": 1,
         "Country_name": "India"
        },
        {
         "sn": 2,
         "Country_name": "China"
        },
        {
         "sn": 3,
         "Country_name": "United States"
        },
        {
         "sn": 4,
         "Country_name": "Indonesia"
        },
        {
         "sn": 5,
         "Country_name": "Pakistan"
        },
        {
         "sn": 6,
         "Country_name": "Nigeria"
        },
        {
         "sn": 7,
         "Country_name": "Brazil"
        },
        {
         "sn": 8,
         "Country_name": "Bangladesh"
        },
        {
         "sn": 9,
         "Country_name": "Russia"
        },
        {
         "sn": 10,
         "Country_name": "Mexico"
        },
        {
         "sn": 11,
         "Country_name": "Ethiopia"
        },
        {
         "sn": 12,
         "Country_name": "Japan"
        },
        {
         "sn": 13,
         "Country_name": "Philippines"
        },
        {
         "sn": 14,
         "Country_name": "Egypt"
        },
        {
         "sn": 15,
         "Country_name": "DR Congo"
        },
        {
         "sn": 16,
         "Country_name": "Vietnam"
        },
        {
         "sn": 17,
         "Country_name": "Iran"
        },
        {
         "sn": 18,
         "Country_name": "Turkey"
        },
        {
         "sn": 19,
         "Country_name": "Germany"
        },
        {
         "sn": 20,
         "Country_name": "Thailand"
        },
        {
         "sn": 21,
         "Country_name": "United Kingdom"
        },
        {
         "sn": 22,
         "Country_name": "Tanzania"
        },
        {
         "sn": 23,
         "Country_name": "France"
        },
        {
         "sn": 24,
         "Country_name": "South Africa"
        },
        {
         "sn": 25,
         "Country_name": "Italy"
        },
        {
         "sn": 26,
         "Country_name": "Kenya"
        },
        {
         "sn": 27,
         "Country_name": "Myanmar"
        },
        {
         "sn": 28,
         "Country_name": "Colombia"
        },
        {
         "sn": 29,
         "Country_name": "South Korea"
        },
        {
         "sn": 30,
         "Country_name": "Uganda"
        },
        {
         "sn": 31,
         "Country_name": "Sudan"
        },
        {
         "sn": 32,
         "Country_name": "Spain"
        },
        {
         "sn": 33,
         "Country_name": "Argentina"
        },
        {
         "sn": 34,
         "Country_name": "Algeria"
        },
        {
         "sn": 35,
         "Country_name": "Iraq"
        },
        {
         "sn": 36,
         "Country_name": "Afghanistan"
        },
        {
         "sn": 37,
         "Country_name": "Poland"
        },
        {
         "sn": 38,
         "Country_name": "Canada"
        },
        {
         "sn": 39,
         "Country_name": "Morocco"
        },
        {
         "sn": 40,
         "Country_name": "Saudi Arabia"
        },
        {
         "sn": 41,
         "Country_name": "Ukraine"
        },
        {
         "sn": 42,
         "Country_name": "Angola"
        },
        {
         "sn": 43,
         "Country_name": "Uzbekistan"
        },
        {
         "sn": 44,
         "Country_name": "Yemen"
        },
        {
         "sn": 45,
         "Country_name": "Peru"
        },
        {
         "sn": 46,
         "Country_name": "Malaysia"
        },
        {
         "sn": 47,
         "Country_name": "Ghana"
        },
        {
         "sn": 48,
         "Country_name": "Mozambique"
        },
        {
         "sn": 49,
         "Country_name": "Nepal"
        },
        {
         "sn": 50,
         "Country_name": "Madagascar"
        },
        {
         "sn": 51,
         "Country_name": "Côte d'Ivoire"
        },
        {
         "sn": 52,
         "Country_name": "Venezuela"
        },
        {
         "sn": 53,
         "Country_name": "Cameroon"
        },
        {
         "sn": 54,
         "Country_name": "Niger"
        },
        {
         "sn": 55,
         "Country_name": "Australia"
        },
        {
         "sn": 56,
         "Country_name": "North Korea"
        },
        {
         "sn": 57,
         "Country_name": "Mali"
        },
        {
         "sn": 58,
         "Country_name": "Burkina Faso"
        },
        {
         "sn": 59,
         "Country_name": "Syria"
        },
        {
         "sn": 60,
         "Country_name": "Sri Lanka"
        },
        {
         "sn": 61,
         "Country_name": "Malawi"
        },
        {
         "sn": 62,
         "Country_name": "Zambia"
        },
        {
         "sn": 63,
         "Country_name": "Romania"
        },
        {
         "sn": 64,
         "Country_name": "Chile"
        },
        {
         "sn": 65,
         "Country_name": "Kazakhstan"
        },
        {
         "sn": 66,
         "Country_name": "Chad"
        },
        {
         "sn": 67,
         "Country_name": "Ecuador"
        },
        {
         "sn": 68,
         "Country_name": "Somalia"
        },
        {
         "sn": 69,
         "Country_name": "Guatemala"
        },
        {
         "sn": 70,
         "Country_name": "Senegal"
        },
        {
         "sn": 71,
         "Country_name": "Netherlands"
        },
        {
         "sn": 72,
         "Country_name": "Cambodia"
        },
        {
         "sn": 73,
         "Country_name": "Zimbabwe"
        },
        {
         "sn": 74,
         "Country_name": "Guinea"
        },
        {
         "sn": 75,
         "Country_name": "Rwanda"
        },
        {
         "sn": 76,
         "Country_name": "Benin"
        },
        {
         "sn": 77,
         "Country_name": "Burundi"
        },
        {
         "sn": 78,
         "Country_name": "Tunisia"
        },
        {
         "sn": 79,
         "Country_name": "Bolivia"
        },
        {
         "sn": 80,
         "Country_name": "Haiti"
        },
        {
         "sn": 81,
         "Country_name": "Belgium"
        },
        {
         "sn": 82,
         "Country_name": "Jordan"
        },
        {
         "sn": 83,
         "Country_name": "Dominican Republic"
        },
        {
         "sn": 84,
         "Country_name": "Cuba"
        },
        {
         "sn": 85,
         "Country_name": "South Sudan"
        },
        {
         "sn": 86,
         "Country_name": "Sweden"
        },
        {
         "sn": 87,
         "Country_name": "Honduras"
        },
        {
         "sn": 88,
         "Country_name": "Czech Republic (Czechia)"
        },
        {
         "sn": 89,
         "Country_name": "Azerbaijan"
        },
        {
         "sn": 90,
         "Country_name": "Greece"
        },
        {
         "sn": 91,
         "Country_name": "Papua New Guinea"
        },
        {
         "sn": 92,
         "Country_name": "Portugal"
        },
        {
         "sn": 93,
         "Country_name": "Hungary"
        },
        {
         "sn": 94,
         "Country_name": "Tajikistan"
        },
        {
         "sn": 95,
         "Country_name": "United Arab Emirates"
        },
        {
         "sn": 96,
         "Country_name": "Belarus"
        },
        {
         "sn": 97,
         "Country_name": "Israel"
        },
        {
         "sn": 98,
         "Country_name": "Togo"
        },
        {
         "sn": 99,
         "Country_name": "Austria"
        },
        {
         "sn": 100,
         "Country_name": "Switzerland"
        },
        {
         "sn": 101,
         "Country_name": "Sierra Leone"
        },
        {
         "sn": 102,
         "Country_name": "Laos"
        },
        {
         "sn": 103,
         "Country_name": "Serbia"
        },
        {
         "sn": 104,
         "Country_name": "Nicaragua"
        },
        {
         "sn": 105,
         "Country_name": "Libya"
        },
        {
         "sn": 106,
         "Country_name": "Paraguay"
        },
        {
         "sn": 107,
         "Country_name": "Kyrgyzstan"
        },
        {
         "sn": 108,
         "Country_name": "Bulgaria"
        },
        {
         "sn": 109,
         "Country_name": "Turkmenistan"
        },
        {
         "sn": 110,
         "Country_name": "El Salvador"
        },
        {
         "sn": 111,
         "Country_name": "Congo"
        },
        {
         "sn": 112,
         "Country_name": "Singapore"
        },
        {
         "sn": 113,
         "Country_name": "Denmark"
        },
        {
         "sn": 114,
         "Country_name": "Slovakia"
        },
        {
         "sn": 115,
         "Country_name": "Central African Republic"
        },
        {
         "sn": 116,
         "Country_name": "Finland"
        },
        {
         "sn": 117,
         "Country_name": "Norway"
        },
        {
         "sn": 118,
         "Country_name": "Liberia"
        },
        {
         "sn": 119,
         "Country_name": "State of Palestine"
        },
        {
         "sn": 120,
         "Country_name": "Lebanon"
        },
        {
         "sn": 121,
         "Country_name": "New Zealand"
        },
        {
         "sn": 122,
         "Country_name": "Costa Rica"
        },
        {
         "sn": 123,
         "Country_name": "Ireland"
        },
        {
         "sn": 124,
         "Country_name": "Mauritania"
        },
        {
         "sn": 125,
         "Country_name": "Oman"
        },
        {
         "sn": 126,
         "Country_name": "Panama"
        },
        {
         "sn": 127,
         "Country_name": "Kuwait"
        },
        {
         "sn": 128,
         "Country_name": "Croatia"
        },
        {
         "sn": 129,
         "Country_name": "Eritrea"
        },
        {
         "sn": 130,
         "Country_name": "Georgia"
        },
        {
         "sn": 131,
         "Country_name": "Mongolia"
        },
        {
         "sn": 132,
         "Country_name": "Moldova"
        },
        {
         "sn": 133,
         "Country_name": "Uruguay"
        },
        {
         "sn": 134,
         "Country_name": "Bosnia and Herzegovina"
        },
        {
         "sn": 135,
         "Country_name": "Albania"
        },
        {
         "sn": 136,
         "Country_name": "Jamaica"
        },
        {
         "sn": 137,
         "Country_name": "Armenia"
        },
        {
         "sn": 138,
         "Country_name": "Gambia"
        },
        {
         "sn": 139,
         "Country_name": "Lithuania"
        },
        {
         "sn": 140,
         "Country_name": "Qatar"
        },
        {
         "sn": 141,
         "Country_name": "Botswana"
        },
        {
         "sn": 142,
         "Country_name": "Namibia"
        },
        {
         "sn": 143,
         "Country_name": "Gabon"
        },
        {
         "sn": 144,
         "Country_name": "Lesotho"
        },
        {
         "sn": 145,
         "Country_name": "Guinea-Bissau"
        },
        {
         "sn": 146,
         "Country_name": "Slovenia"
        },
        {
         "sn": 147,
         "Country_name": "North Macedonia"
        },
        {
         "sn": 148,
         "Country_name": "Latvia"
        },
        {
         "sn": 149,
         "Country_name": "Equatorial Guinea"
        },
        {
         "sn": 150,
         "Country_name": "Trinidad and Tobago"
        },
        {
         "sn": 151,
         "Country_name": "Bahrain"
        },
        {
         "sn": 152,
         "Country_name": "Timor-Leste"
        },
        {
         "sn": 153,
         "Country_name": "Estonia"
        },
        {
         "sn": 154,
         "Country_name": "Mauritius"
        },
        {
         "sn": 155,
         "Country_name": "Cyprus"
        },
        {
         "sn": 156,
         "Country_name": "Eswatini"
        },
        {
         "sn": 157,
         "Country_name": "Djibouti"
        },
        {
         "sn": 158,
         "Country_name": "Fiji"
        },
        {
         "sn": 159,
         "Country_name": "Comoros"
        },
        {
         "sn": 160,
         "Country_name": "Guyana"
        },
        {
         "sn": 161,
         "Country_name": "Bhutan"
        },
        {
         "sn": 162,
         "Country_name": "Solomon Islands"
        },
        {
         "sn": 163,
         "Country_name": "Luxembourg"
        },
        {
         "sn": 164,
         "Country_name": "Montenegro"
        },
        {
         "sn": 165,
         "Country_name": "Suriname"
        },
        {
         "sn": 166,
         "Country_name": "Cabo Verde"
        },
        {
         "sn": 167,
         "Country_name": "Micronesia"
        },
        {
         "sn": 168,
         "Country_name": "Malta"
        },
        {
         "sn": 169,
         "Country_name": "Maldives"
        },
        {
         "sn": 170,
         "Country_name": "Brunei"
        },
        {
         "sn": 171,
         "Country_name": "Bahamas"
        },
        {
         "sn": 172,
         "Country_name": "Belize"
        },
        {
         "sn": 173,
         "Country_name": "Iceland"
        },
        {
         "sn": 174,
         "Country_name": "Vanuatu"
        },
        {
         "sn": 175,
         "Country_name": "Barbados"
        },
        {
         "sn": 176,
         "Country_name": "Sao Tome & Principe"
        },
        {
         "sn": 177,
         "Country_name": "Samoa"
        },
        {
         "sn": 178,
         "Country_name": "Saint Lucia"
        },
        {
         "sn": 179,
         "Country_name": "Kiribati"
        },
        {
         "sn": 180,
         "Country_name": "Grenada"
        },
        {
         "sn": 181,
         "Country_name": "Tonga"
        },
        {
         "sn": 182,
         "Country_name": "Seychelles"
        },
        {
         "sn": 183,
         "Country_name": "St. Vincent & Grenadines"
        },
        {
         "sn": 184,
         "Country_name": "Antigua and Barbuda"
        },
        {
         "sn": 185,
         "Country_name": "Andorra"
        },
        {
         "sn": 186,
         "Country_name": "Dominica"
        },
        {
         "sn": 187,
         "Country_name": "Saint Kitts & Nevis"
        },
        {
         "sn": 188,
         "Country_name": "Marshall Islands"
        },
        {
         "sn": 189,
         "Country_name": "Liechtenstein"
        },
        {
         "sn": 190,
         "Country_name": "Monaco"
        },
        {
         "sn": 191,
         "Country_name": "San Marino"
        },
        {
         "sn": 192,
         "Country_name": "Palau"
        },
        {
         "sn": 193,
         "Country_name": "Nauru"
        },
        {
         "sn": 194,
         "Country_name": "Tuvalu"
        },
        {
         "sn": 195,
         "Country_name": "Holy See"
        }
       ];
       const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
       const handelsubmit = (e) =>{
        e.preventDefault(); 
        const image = e.target.img.files[0];

        
        ///--------------------
 
    console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const first_name = e.target.first_name.value;
                const last_name = e.target.last_name.value;
                const user_name = e.target.user_name.value;
                const email = e.target.email.value;
                const address_1 = e.target.address_1.value;
                const address_2 = e.target.address_2.value;
                const mobile_number = e.target.mobile_number.value;
                const country = e.target.country.value;
                const office_location = e.target.office_location.value;
                const update_date = `${day}/${month + 1}/${year}`;
                const image_url = result.data.url;
                const data = { first_name, last_name, user_name, email, address_1, address_2, mobile_number, country, office_location, update_date,image_url}
          
                // send data to the server
                fetch('http://localhost:3005/api/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json' 
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data =>{
                    toast.success('lotary added successfully!!!'); 
                    e.target.reset();
                })

            }
            
        }) 

 
       }
    return (
        <div className='flex mx-auto  justify-center'>
             
            

            <dialog id="my_modal_4" className="modal">
            
            <div className="modal-box w-6/12 max-w-5xl">
            <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-400">✕</button>
            </form > 
                 <div className='flex mx-auto'>
                        <form onSubmit={handelsubmit}>
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">First Name</span> 
                                        </div>
                                        <input type="text" name='first_name' placeholder="Your First Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Last Name</span> 
                                        </div>
                                        <input type="text" name='last_name' placeholder="Your Last Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">User Name</span> 
                                        </div>
                                        <input type="text" name='user_name' placeholder="Your user Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Email</span> 
                                        </div>
                                        <input type="Email" name='email' placeholder="Your user Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Adderss line 1</span> 
                                        </div>
                                        <input type="text" name='address_1' placeholder="Your Last Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Adderss line 2</span> 
                                        </div>
                                        <input type="text" name='address_2' placeholder="Your Last Name" className="input input-bordered w-full max-w-xs" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Mobile Number</span> 
                                        </div>
                                        <input type="tel"  name="mobile_number" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your mobile number" required /> 
                                        </label>
                                    
                                </div>    
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                        <span className="label-text">Country</span> 
                                        
                                        </div> 
                                        <select name='country'  placeholder="Please select your Country"  className="select select-bordered w-full max-w-xs" >
                                        <option disabled selected> Select Your Country</option>
                                                {country.map((r, index) => (
                                                    <option key={index + 1}>
                                                    {r.Country_name}
                                                    </option>
                                                ))}
                                                </select>
                                        </label>
                                    
                                </div>   
                                <div>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Office Location</span> 
                                        </div>
                                        <input type="text"  name="office_location" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-blue-500"
                                            placeholder="Your Office Location" required /> 
                                        </label>
                                    
                                </div> 
                                <div className='m-2 p-2'>
                                    <label className="form-control w-full max-w-xs"> 
                                      
                                        <input type="file" name="img" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                                     
                                        </label>
                                    
                                </div> 
                                <div className='p-2 m-2'>
                                     
                                <input className='btn w-full max-w-xs btn-primary'  type="submit"  value='Submit' />
                                     
                                </div> 


                        </form>




                 </div>
            </div>
            </dialog>
        </div>
    );
};

export default Adduser;