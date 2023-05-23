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
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XupDMDoCL._AC_UY695_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 15,
    rating: 5
)

p2 = Physician.create(
    first_name: "Alexander",
    last_name: "Great",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61liL3F0mCS._AC_UY879_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 8,
    rating: 5

)

p3 = Physician.create(
    first_name: "Naomi",
    last_name: "Best",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51iFtRKei3L._AC_UY695_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 8,
    rating: 5
)

p4 = Physician.create(
    first_name: "Mary",
    last_name: "Alright",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814rpp-AYUL._AC_UX679_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 7,
    rating: 3.5

)

p5 = Physician.create(
    first_name: "Hilary",
    last_name: "Cliff",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C9103XLI8aML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 11,
    rating: 3
)

p6 = Physician.create(
    first_name: "Rock",
    last_name: "Smarth",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NWBzF4hCL._AC_UX679_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 4,
    rating: 3

)

p7 = Physician.create(
    first_name: "Paul",
    last_name: "Love",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71T6ajSCg5L._AC_SX679_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 25,
    rating: 5
)

p8 = Physician.create(
    first_name: "Mike",
    last_name: "Felix",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616SvseuApL._AC_SL1024_.jpg",
    bio: "Bachelor in Nursing Nigeria, Havard Medical school USA, distinction candidate",
    city: "Arlington",
    specialty: "Internal Medicine",
    years_of_experience: 20,
    rating: 4.5

)


pt1 = Patient.create(
    first_name: "Pius",
    last_name: "Emefiene",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XupDMDoCL._AC_UY695_.jpg",
    date_of_birth: "03/18/1970"

)

pt2 = Patient.create(
    first_name: "Chidex",
    last_name: "Vibes",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XupDMDoCL._AC_UY695_.jpg",
    date_of_birth: "06/3/1990"
)

pt3 = Patient.create(
    first_name: "Stephanie",
    last_name: "Johnson",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61liL3F0mCS._AC_UY879_.jpg",
    date_of_birth: "09/3/1960"
)

pt4 = Patient.create(
    first_name: "Linda",
    last_name: "Best",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51iFtRKei3L._AC_UY695_.jpg",
    date_of_birth: "08/12/1978"
)

pt5 = Patient.create(
    first_name: "Mary",
    last_name: "Alright",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814rpp-AYUL._AC_UX679_.jpg",
    date_of_birth: "04/13/2000"

)

pt6 = Patient.create(
    first_name: "Hilary",
    last_name: "Cliff",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C9103XLI8aML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
    date_of_birth: "01/12/1987"
)

pt7 = Patient.create(
    first_name: "Rock",
    last_name: "Smarth",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NWBzF4hCL._AC_UX679_.jpg",
    date_of_birth: "03/22/1949"

)

pt8 = Patient.create(
    first_name: "Paul",
    last_name: "Love",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71T6ajSCg5L._AC_SX679_.jpg",
    date_of_birth: "11/12/1985"
)

pt9 = Patient.create(
    first_name: "Mike",
    last_name: "Felix",
    phone_number: "(817) 222-3333",
    img_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616SvseuApL._AC_SL1024_.jpg",
    date_of_birth: "03/15/1990"
)

aa = Appointment.create(physician:p1, patient:pt1, time: "08/12/2021 10:00", patient_flowsheet_complete: true, appointment_complete: false)
ab = Appointment.create(physician:p2, patient:pt2, time: "08/12/2021 10:00", patient_flowsheet_complete: false, appointment_complete: true)
ac = Appointment.create(physician:p3, patient:pt3, time: "08/12/2021 09:00", patient_flowsheet_complete: true, appointment_complete: false)
ad = Appointment.create(physician:p4, patient:pt4, time: "08/12/2021 08:00", patient_flowsheet_complete: false, appointment_complete: true)
ae = Appointment.create(physician:p5, patient:pt5,time: "08/12/2021 10:30", patient_flowsheet_complete: true, appointment_complete: false)
af = Appointment.create(physician:p6, patient:pt6,time: "08/12/2021 00:00", patient_flowsheet_complete: false, appointment_complete: true)
ag = Appointment.create(physician:p7, patient:pt7,time: "08/12/2021 10:00", patient_flowsheet_complete: true, appointment_complete: false)
ah = Appointment.create(physician:p8, patient:pt8,time: "08/12/2021 09:20", patient_flowsheet_complete: true, appointment_complete: true)
ai = Appointment.create(physician:p1, patient:pt9,time: "08/12/2021 13:00", patient_flowsheet_complete: false, appointment_complete: true)
aj = Appointment.create(physician:p2, patient:pt1,time: "08/12/2021 14:20", patient_flowsheet_complete: true, appointment_complete: false)
ak = Appointment.create(physician:p3, patient:pt2,time: "08/12/2021 15:00", patient_flowsheet_complete: false, appointment_complete: false)
al = Appointment.create(physician:p4, patient:pt3,time: "08/12/2021 14:45", patient_flowsheet_complete: true, appointment_complete: true)




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




 fa = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fb = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fc = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fd = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fe = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

ff = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fg = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fh = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fi = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fj = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fk = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)

fl = Flowsheet.create(
    appointment:aa,
    location: "My chest",
    duration: "Half a day",
    Blood_pressure: nil,
    bmi: nil,
    weight: nil,
    height: nil,
    temperature: nil,
    pulse: nil,
    oxygen_saturation: nil,
    doctor_notes: nil,
    reason_for_visit: "Chest pains"
)


