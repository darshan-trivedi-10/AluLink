import mongoose from "mongoose";


const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    established: {
        type: Date,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    logo: {
        type: String
    },
    description: {
        type: String,
        require: true
    },
    programType: {
        type: String,
        required: true,
    },
    isVerified: {
        type: String,
        required: true
    },
    admin: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
    }
})



const organization = mongoose.model('Organization', organizationSchema);

export default organization;

/*
Program Type Options :

enum: ['Engineering','MBA','MBBS','Arts','Science','Commerce','Law','Architecture','Journalism','Education','Information Technology','Design','Medicine','Dentistry','Pharmacy','Nursing','Psychology','Social Work','Public Health','Hospitality','Sports Science','Agriculture','Environmental Science','Fashion Design','Performing Arts','Film Studies','Communication','Foreign Languages','Philosophy','History','Geography','Political Science','Economics','Mathematics','Statistics','Computer Science','Data Science','Artificial Intelligence','Robotics','Cybersecurity','Anthropology','Sociology','International Relations','Marketing','Finance','Accounting','Entrepreneurship','Operations Management','Supply Chain Management','Human Resource Management','Real Estate','Public Administration','Museum Studies','Library Science','Criminal Justice','Forensic Science','Emergency Management','Disaster Management','Public Safety','Aviation','Maritime Studies','Military Science','Gender Studies','Race and Ethnicity Studies','Queer Studies','Religious Studies','Cultural Studies','Asian Studies','Middle Eastern Studies','African Studies','European Studies','Latin American Studies','Indigenous Studies','Peace Studies','Conflict Resolution','Philanthropy','Nonprofit Management','Social Entrepreneurship','Urban Studies','Rural Studies','Applied Mathematics','Pure Mathematics','Actuarial Science','Mathematical Finance','Operations Research','Astrophysics','Quantum Physics','Particle Physics','Nuclear Physics','Optics','Condensed Matter Physics','Materials Science','Environmental Engineering','Chemical Engineering','Civil Engineering','Structural Engineering','Transportation Engineering','Geotechnical Engineering','Water Resources Engineering','Mechanical Engineering','Aerospace Engineering','Biomedical Engineering','Biomechanical Engineering','Electrical Engineering','Computer Engineering','Software Engineering','Systems Engineering','Telecommunications Engineering'
]

*/
