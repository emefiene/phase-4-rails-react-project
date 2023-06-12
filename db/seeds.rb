# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p1 = Physician.create(
    first_name: "Pius",
    last_name: "Emefiene",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_400_400/0/1661237685903?e=1685577600&v=beta&t=5uvslq40-HQBxprsfiA9MdCRJliV0lllxcMG4OgOQiA",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 15
 
)

p2 = Physician.create(
    first_name: "Alexander",
    last_name: "Great",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_100_100/0/1661237685903?e=1685577600&v=beta&t=wmYYFE5UCj5KWbNMzCurR_7H_Y9RZaE7gm0gzygsvdo",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 8
 

)

p3 = Physician.create(
    first_name: "Naomi",
    last_name: "Best",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C5603AQH_LQJixpUxwg/profile-displayphoto-shrink_100_100/0/1545089788339?e=1685577600&v=beta&t=9wwPOoq6eMB49Vg8XH6490fubrNUqCZewuwXGKrAef0",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 8

)

p4 = Physician.create(
    first_name: "Mary",
    last_name: "Alright",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQEBh-y-sFABow/profile-displayphoto-shrink_400_400/0/1549083175330?e=1685577600&v=beta&t=5w82H1qWuyjwTVVJsJVrAyorFUeW3Gpvvp3tn1nR2Sc",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 7


)

p5 = Physician.create(
    first_name: "Hilary",
    last_name: "Cliff",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 11

)

p6 = Physician.create(
    first_name: "Rock",
    last_name: "Smarth",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 4


)

p7 = Physician.create(
    first_name: "Paul",
    last_name: "Love",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 25
 
)
p8 = Physician.create(
    first_name: "Mike",
    last_name: "Felix",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 20
  

)


pt1 = Patient.create(
    first_name: "Pius",
    last_name: "Emefiene",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400",
    date_of_birth: "03/18/1970"

)

pt2 = Patient.create(
    first_name: "Chidex",
    last_name: "Vibes",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400",
    date_of_birth: "06/3/1990"
)

pt3 = Patient.create(
    first_name: "Stephanie",
    last_name: "Johnson",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400",
    date_of_birth: "09/3/1960"
)

pt4 = Patient.create(
    first_name: "Linda",
    last_name: "Best",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE",
    date_of_birth: "08/12/1978"
)

pt5 = Patient.create(
    first_name: "Mary",
    last_name: "Alright",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE",
    date_of_birth: "04/13/2000"

)

pt6 = Patient.create(
    first_name: "Hilary",
    last_name: "Cliff",
    phone_number: "(817) 222-3333",
    img_url:"https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE",
    date_of_birth: "01/12/1987"
)

pt7 = Patient.create(
    first_name: "Rock",
    last_name: "Smarth",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_400_400/0/1661237685903?e=1685577600&v=beta&t=5uvslq40-HQBxprsfiA9MdCRJliV0lllxcMG4OgOQiA",
    date_of_birth: "03/22/1949"

)

pt8 = Patient.create(
    first_name: "Paul",
    last_name: "Love",
    phone_number: "(817) 222-3333",
    img_url:"https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_400_400/0/1661237685903?e=1685577600&v=beta&t=5uvslq40-HQBxprsfiA9MdCRJliV0lllxcMG4OgOQiA",
    date_of_birth: "11/12/1985"
)

pt9 = Patient.create(
    first_name: "Mike",
    last_name: "Felix",
    phone_number: "(817) 222-3333",
    img_url: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_400_400/0/1661237685903?e=1685577600&v=beta&t=5uvslq40-HQBxprsfiA9MdCRJliV0lllxcMG4OgOQiA",
    date_of_birth: "03/15/1990"
)

# aa = Appointment.create(physician:p1, patient:pt1, time: "08/12/2021 10:00", patient_flowsheet_complete: true, appointment_complete: false)
# ab = Appointment.create(physician:p2, patient:pt2, time: "08/12/2021 10:00", patient_flowsheet_complete: false, appointment_complete: true)
# ac = Appointment.create(physician:p3, patient:pt3, time: "08/12/2021 09:00", patient_flowsheet_complete: true, appointment_complete: false)
# ad = Appointment.create(physician:p4, patient:pt4, time: "08/12/2021 08:00", patient_flowsheet_complete: false, appointment_complete: true)
# ae = Appointment.create(physician:p5, patient:pt5,time: "08/12/2021 10:30", patient_flowsheet_complete: true, appointment_complete: false)
# af = Appointment.create(physician:p6, patient:pt6,time: "08/12/2021 00:00", patient_flowsheet_complete: false, appointment_complete: true)
# ag = Appointment.create(physician:p7, patient:pt7,time: "08/12/2021 10:00", patient_flowsheet_complete: true, appointment_complete: false)
# ah = Appointment.create(physician:p8, patient:pt8,time: "08/12/2021 09:20", patient_flowsheet_complete: true, appointment_complete: true)
# ai = Appointment.create(physician:p1, patient:pt9,time: "08/12/2021 13:00", patient_flowsheet_complete: false, appointment_complete: true)
# aj = Appointment.create(physician:p2, patient:pt1,time: "08/12/2021 14:20", patient_flowsheet_complete: true, appointment_complete: false)
# ak = Appointment.create(physician:p3, patient:pt2,time: "08/12/2021 15:00", patient_flowsheet_complete: false, appointment_complete: false)
# al = Appointment.create(physician:p4, patient:pt3,time: "08/12/2021 14:45", patient_flowsheet_complete: true, appointment_complete: true)




u1 = User.create( username: "pman", password: '1234' , role_id: p1.id, role_type: "Physician")
u2 = User.create( username: "pman1", password: '1234' , role_id: p2.id, role_type: "Physician")
u3 = User.create( username: "pman2", password: '1234' , role_id: p3.id, role_type: "Physician")
u4 = User.create( username: "pman3", password: '1234' , role_id: p4.id, role_type: "Physician")
u5 = User.create( username: "pman4", password: '1234' , role_id: p5.id, role_type: "Physician")
u6 = User.create( username: "pman5", password: '1234' , role_id: p6.id, role_type: "Physician")
u7 = User.create( username: "pman6", password: '1234' , role_id: p7.id, role_type: "Physician")
u8 = User.create( username: "pman7", password: '1234' , role_id: p8.id, role_type: "Physician")
u9 = User.create( username: "ptman", password: '1234' , role_id: pt1.id, role_type: "Patient")
u10 = User.create( username: "ptman1", password: '1234' , role_id: pt2.id, role_type: "Patient")
u11 = User.create( username: "ptman2", password: '1234' , role_id: pt3.id, role_type: "Patient")
u12 = User.create( username: "ptman3", password: '1234' , role_id: pt4.id, role_type: "Patient")
u13 = User.create( username: "ptman4", password: '1234' , role_id: pt5.id, role_type: "Patient")
u14 = User.create( username: "ptman5", password: '1234' , role_id: pt6.id, role_type: "Patient")
u15 = User.create( username: "ptman6", password: '1234' , role_id: pt7.id, role_type: "Patient")
u16 = User.create( username: "ptman7", password: '1234' , role_id: pt8.id, role_type: "Patient")
u16 = User.create( username: "ptman8", password: '1234' , role_id: pt9.id, role_type: "Patient")




#  fa = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fb = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fc = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fd = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fe = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# ff = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fg = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fh = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fi = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fj = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fk = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )

# fl = Flowsheet.create(
#     appointment:aa,
#     location: "My chest",
#     duration: "Half a day",
#     Blood_pressure: nil,
#     bmi: nil,
#     weight: nil,
#     height: nil,
#     temperature: nil,
#     pulse: nil,
#     oxygen_saturation: nil,
#     doctor_notes: nil,
#     reason_for_visit: "Chest pains"
# )


