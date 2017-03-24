documentation!


interface JSONMessageParams{
	{String: Any}    //Dictionary key არის String და value ნებისმიერი ობიექტი
}

// მეთოდების ჩამონათვალი
const enum JSONAPIMethods : Int {
    Login = 0
    LoginResult = 1

    Logout = 2
    LogoutResult = 3

    Register = 4
    RegisterResult = 5

    ChangePassword = 10
    ChangePasswordResult = 11

    GetTours = 6
    GetToursResult = 7

    GetSights = 8
    GetSightsResult = 9
}


const enum ErrorCode : Int {
    success = 0,
    unknowError = 1,
    userNameOrPasswordIsIncorect = 2,
    sesionTimeOut = 3,
    invalidJson = 4,
    passwordIsIncorrect = 5
}



// ///////////////////////////////// დალოგინება Login \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// request body

 
{
    method: JSONAPIMethods.Login, //აქ იქნება შესაბამისი რიცხვი ანუ 0

    params: 
    {
    	userName: "",
        password: ""
    }
}

//responseMessage
{
    method: JSONAPIMethods.LoginResult, //აქ იქნება შესაბამისი რიცხვი ანუ 1
    params:
    {
        sessionId: ""
    },
    errorCode: ErrorCode.Success //აქ იქნება შესაბამისი რიცხვი ანუ 0
}
    //პრობლემის შემთხვევა responseMessage
    
{
    method: JSONAPIMethods.LoginResult, //აქ იქნება შესაბამისი რიცხვი ანუ 1
    errorCode: ErrorCode.UserNameOrPasswordIsIncorect, //აქ იქნება შესაბამისი რიცხვი ანუ 2 ან რა ერრორიც იქნება იმის რიცხვი
    message: "" //"რა ერირიც მოხდება იმის მესიჯი, ტესტირებისტვის იქნება კარგი"
}

// ///////////////////////////////// Logout \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// request body
{
    method: JSONAPIMethods.Logout,

    params: 
    {
    	sessionId: ""
    }
}


//responseMessage
{
    method: JSONAPIMethods.LogoutResult,
    params:
    {
        success: true // an false
    },
    errorCode: ErrorCode.Success
}
    //პრობლემის შემთხვევა responseMessage 
{
    method: JSONAPIMethods.LogoutResult, 
    errorCode: ErrorCode.invalidJson, 
    message: "" 
}

// ///////////////////////////////// Register \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// request body
{
    method: JSONAPIMethods.Register,

    params: 
    {
    	firstname: "",
    	lastName: "",
    	userName: "",
    	password: "",
    	dateOfBirth: "",
    }
}


//responseMessage
{
    method: JSONAPIMethods.RegisterResult,
    params:
    {
        success: true, // an false
        sessionId: ""
    },
    errorCode: ErrorCode.Success
}
    //პრობლემის შემთხვევა responseMessage 
{
    method: JSONAPIMethods.RegisterResult, 
    errorCode: ErrorCode.invalidJson, 
    message: "" 
}
////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\ChangePassword\\\\\\\\\\\\\\\\\\\\////////////////////////
{
    method: JSONAPIMethods.ChangePassword,

    params: 
    {
        oldPassword: "",
        newPassword: "",
        sessionId: ""
    }
}


//responseMessage
{
    method: JSONAPIMethods.ChangePasswordResult,
    params:
    {
        success: true // an false
        
    },
    errorCode: ErrorCode.Success
}
    //პრობლემის შემთხვევა responseMessage 
{
    method: JSONAPIMethods.ChangePasswordResult, 
    errorCode: ErrorCode.passwordIsIncorrect, 
    message: "" 
}
////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\*******////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
enum RoadType : Int
{
	car = 1
	line = 2
	walking = 3
}

interface Point{
	latlng = [Double, Double]. // ["41.68798379999999", "44.8111543"]
	order: Int
}

interface Roads 
{
	type: RoadType
	points: [Point]
}

interface Tours
{
    id: number
    cost: number
    name: LocalizedString
    description: LocalizedString
    duration: LocalizedString
    images: [String]
    roads: [Roads]
}

interface GetToursResultParams extends JSONMessageParams
{
    tours:Array<Tours>
}

<JSONMessageAPIDocumentation>
{
    implementationStatus: // აქ დაიწერება სტატუსი იმპლემენტირებულია თუ არა ეს მეთოდი

    requestMessage: <JSONMessage>
    {
        method: JSONAPIMethods.GetTours,
        params:
        {
            sessionId:<string>"123123"
        },
        messageId: GenerateJSONMessageID()
    },

    responseMessage: <JSONMessage>
    {
        method: JSONAPIMethods.GetToursResult,
        params: <GetToursParams>{
            tours:[
                {
                    id: 23,
				    cost: 2.5
				    name: {
				            LanguageCode.eng: "Welcome user" ,
				            LanguageCode.geo: "გამარჯობა იუზერ",
				            LanguageCode.rus: "privet user"
       					 }, 
				    description: {
					            LanguageCode.eng: "Welcome user" ,
					            LanguageCode.geo: "გამარჯობა იუზერ",
					            LanguageCode.rus: "privet user" / 
				    }
				    duration: {
					            LanguageCode.eng: "1 hour" ,
					            LanguageCode.geo: "1 საათი",
					            LanguageCode.rus: "1 chas"
				    }
				    images: ["/Tours/1004/tbilisi.jpg", /Tours/1004/tsi.jpg],
				    roads: [Roads]
                },
                {
                	id: 23,
				    cost: 2.5
				    name: {
				            LanguageCode.eng: "Welcome user" ,
				            LanguageCode.geo: "გამარჯობა იუზერ",
				            LanguageCode.rus: "privet user"
       					 }, 
				    description: {
					            LanguageCode.eng: "Welcome user" ,
					            LanguageCode.geo: "გამარჯობა იუზერ",
					            LanguageCode.rus: "privet user" / 
				    }
				    duration: 2.3,
				    images: ["/Tours/1004/tbilisi.jpg", /Tours/1004/tsi.jpg],
				    roads: [Roads]
                }                
            ]
        },
        messageId: CopyJSONMessageIDFromRequestMessage()
    }
}

// ენები
const enum LanguageCode
{
    geo = 1
    eng = 2
    rus = 3
}

interface LocalizedString
{
    LanguageCode : String
}

// მაგალითი
{
    WelcomeMessage:  {
            LanguageCode.eng: "Welcome user" ,
            LanguageCode.geo: "გამარჯობა იუზერ",
            LanguageCode.rus: "privet user" // :) rusuli klaviatura ara maqvs :) 
        },

    ErrorMessage1:  {
            LanguageCode.eng: "what fucking is this" ,
            LanguageCode.geo: "ეს რა დაგვემართა",
            LanguageCode.rus: "bliad" // :) rusuli klaviatura ara maqvs :) 
        }
}

