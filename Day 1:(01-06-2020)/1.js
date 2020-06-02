//1. Convert specifications given below in image to Javascript Object;
var TechnicalSpecification ={
    Dimensions:{
        Overalllength:"3500mm",
        OverallWidth:"1600mm",
        OverallHeight:"1490mm",
        Wheelbase:"2360mm",
        TrackWidth:{
            front:"1405mm",
            rear:"1400mm",
        },
        Minimumturningradius:"4.5m",
        MaximumGroundClearance:"170mm",
    },
    Capacities:{
        seatingCapacity:"5 persons",
        fueltankcapacity:"35liters"
        
    },
    Engine:{
        type:"KB-Series",
        Numberofcylinders:3,
        Numberofvalves:12,
        Capacity:"99B cc/cm^3",
        BoreXStroke:"73.0*79.5 mm",
        ComppressionRatio:"10:1",
        MaximumPower: "67/6.200 PS/rpm",
        MaximumTorque:"90/3.500 Nm/rpm",
        FuelDistribution:"Multipoint Injection"
    },
    Transmission:{Type:"5-speed MT"},
    Chassis:{
        Steering:"Rack&Pinion,Power assisted",
        brakes:{
            front: "Ventilated Discs",
            rear:"Drums",
        },
        Suspension:{
            front:"MACPhersons strut & Coil Spring",
            rear:"Isolated trailing link & coil spring"
        },
        Shockabsorbers:"Gas filled",
        Type:'155/80R13 tubeless'
    },
    Weights:{
        KerbWeight:"860=880kg",
        Grossvechicleweight:"1320kg"
    },
        
}
