const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    flight_name:{
        type: String,
        trim: true,
        required: true
    },
    surname:{
        type: String,
        trim: true,
        required: true
    },
    birth_date:{
        type: Date,
        trim: true,
        required: true
    },
    city:{
        type: String,
        trim: true,
        uppercase: true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    username:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
        required: true
    },
    telephone:{
        type: String,
        trim: true,
        uppercase: true
    },
    favourite_team:{
        type: String,
        trim: true,
        uppercase: true
    },
    gender:{
        type: String,
        uppercase: true,
        trim: true
    },
    creation_date:{
        type: Date,
        default: Date.now
    },
    confirmation_code:{
        type: String,
        trim: true
    },
    league: {
        type: [{
            name: {type: String, trim: true},
            starting_date: {type: Date},
            ending_date: {type: Date},
            role: {type: String, trim: true, uppercase: true},
            status: {type: String, trim: true, uppercase: true},
            inviteCode: {type: String, trim: true},
            tournament: {
                type: [{
                    tournament_id: {type: String, trim: true},
                    flg_out: {type: Boolean},
                    bet: {
                        team: {type: String, trim: true},
                        championship_day: {type: Number},
                        tournament_day: {type: Number},
                        flg_result: {type: Boolean}
                    }
                }]
            }
        }],
    },
    tour_survivor: {
        tour_survivor_id: {type: String, trim: true},
        flg_out: {type: Boolean},
        bet: {
            team: {type: String, trim: true},
            championship_day: {type: Number},
            tour_survivor_day: {type: Number},
            flg_result: {type: Boolean}
        }
    }
},{ autoCreate: true});

UserSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;