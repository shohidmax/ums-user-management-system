import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Profile = ({_id, r}) => {
    const [edit, setEdit] = useState(false);
    const countrys = [
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
    const handleAddToDamage = (key, value) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        const ids = _id; 
        console.log('remover id ', ids);  

        const updatedata = {key, value};
        if (proceed) {
            const url = `http://localhost:3005/api/data/${ids}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedata)
            })
            .then(res => res.json())
            .then(data =>{ 
                console.log(data); 
                toast.success('Product Quntity added successfully!!!')
                setEdit(false)
               
                
            })
            
        }
       
      
    };
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
            <label for={_id} className="btn btn-sm btn-circle bg-red-500 b absolute right-2 top-2">✕</label>

                <div className='m-2 p-2'>
                     
                    <div className='flex mx-auto justify-center'>
                        <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={r.image_url} />
                        </div>
                        </div>
                    </div>

                    <div className='flex justify-end'> 
                    {
                        !edit? <button className="btn btn-xs btn-primary m-1" onClick={() => setEdit(true)}>✎</button>: <button className="btn btn-xs btn-primary m-1" onClick={() => setEdit(false)}>x</button>
                    }
                    </div>

                    <div className='m-2 p-2'>
                         
                        {
                            !edit? <h1 className='text-xl'>First name : {r.first_name } </h1> :  <span><input type="text" onBlur={(t) =>{ handleAddToDamage("first_name", t.target.value) }}   placeholder={r.first_name} className="input input-bordered w-full max-w-xs m-1 p1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /></span>
                        }
                        {
                            !edit? <h1 className='text-xl'>Last name : {r.last_name } </h1> :  <><input type="text" onBlur={(t) =>{ handleAddToDamage("last_name", t.target.value) }}   placeholder={r.last_name} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /> </>
                        }
                    </div>
                    <div className='m-2 p-2'>
                       
                        {
                            !edit? <h1 className='text-xl'>Address 1 : {r.address_1 } </h1> :<>  <input type="text" onBlur={(t) =>{ handleAddToDamage("address_1", t.target.value) }}   placeholder={r.address_1} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /></>
                        }
                        {
                            !edit? <h1 className='text-xl'>Address 2 : {r.address_2 } </h1> : <>  <input type="text" onBlur={(t) =>{ handleAddToDamage("address_2", t.target.value) }}   placeholder={r.address_2} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /> </>
                        }
                    </div>
                    <div className='m-2 p-2'> 
                        {
                            !edit? <a href={`mailto: ${r.email}`}><h1 className='text-xl'>Email : {r.email } 📧</h1></a> : <> <input type="email" onBlur={(t) =>{ handleAddToDamage("email", t.target.value) }}   placeholder={r.email} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /> </>
                        }
                    </div>
                    <div className='m-2 p-2'> 
                       
                        {
                            !edit? <a className='m-6' href={`tel:+${r.mobile_number}`}> <h1 className='text-xl' >Phone  : {r.mobile_number } 📞</h1> </a> : <> <input type="tel" onBlur={(t) =>{ handleAddToDamage("mobile_number", t.target.value) }}   placeholder={r.mobile_number} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /></>
                        }
                    </div>
                    <div className='m-2 p-2'>
                        
                        {
                            !edit? <h1 className='text-xl'>Country  : {r.country }</h1> : <>  
                            <select name='country'  placeholder="Please select your Country" onBlur={(t) =>{ handleAddToDamage("country", t.target.value) }} className={r.country} >
                            <option disabled selected> Select Your Country</option>
                                    {countrys.map((r, index) => (
                                        <option key={index + 1}>
                                        {r.Country_name}
                                        </option>
                                    ))}
                                 </select>
                                 <input type="checkbox" checked="checked" className="checkbox checkbox-info" /> </>
                        
                        }
                    </div>
                    <div className='m-2 p-2'>
                       
                        {
                            !edit? <h1 className='text-xl'>Office Location  : {r.office_location }</h1> : <> <input type="text" onBlur={(t) =>{ handleAddToDamage("office_location", t.target.value) }}   placeholder={r.office_location} className="input input-bordered w-full max-w-xs m-1 p-1" required /> <input type="checkbox" checked="checked" className="checkbox checkbox-info" /> </>
                        }
                    </div>
                    <div className='m-2 p-2'>
                        <h1 className='text-xl'>Added  : {r.update_date } </h1>

                    </div>


                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;