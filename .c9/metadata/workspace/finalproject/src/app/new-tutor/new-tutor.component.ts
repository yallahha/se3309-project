{"changed":true,"filter":false,"title":"new-tutor.component.ts","tooltip":"/finalproject/src/app/new-tutor/new-tutor.component.ts","value":"import { Component, OnInit } from '@angular/core';\nimport {TutorServiceService} from '../tutor-service.service'\nimport {Router} from '@angular/router';\nimport { Observable } from 'rxjs';\n@Component({\n  selector: 'app-new-tutor',\n  templateUrl: './new-tutor.component.html',\n  styleUrls: ['./new-tutor.component.css']\n})\nexport class NewTutorComponent implements OnInit {\n  newTutor : any[];\n   private response : Observable<any[]>;\n  constructor(private router: Router, private tutorService: TutorServiceService) { }\n\n  ngOnInit() {\n    providers:  [TutorServiceService]\n  }\n  Submit(password: string,firstname: string, lastname: string, email: string, gender: string, dob: string, phoneNumber: string, courseCode: string, Rating: number){\n     var goodData= true;\n     var data = [password,firstname,lastname,email,gender,dob,phoneNumber,courseCode,Rating];\n     var dataNames=[\"Password\",\"First Name\",\"Last Name\",\"Email\",\"Gender\",\"Date Of Birth\",\"Phone Number\",\"Course Code\",\"Rating\"];\n     for(var i = 0;i< data.length;i++)\n     {\n       if(data[i]==null || data[i].length<1 || data[i]==\" \")\n       {\n         alert(\"cannot add new Tutor,\" + dataNames[i] + \" is invalid\");\n         goodData=false;\n       }\n       \n       \n     }\n    function isValidDate(dateString) {\n      var regEx = /^\\d{4}-\\d{2}-\\d{2}$/;\n      return dateString.match(regEx) != null;\n    }\n     \n     if(!isValidDate(dob))\n     {\n         alert(\"date is invalid\");\n         goodData=false;\n     }\n     if(goodData)\n     {\n      this.tutorService.AddTutor(this.ftbsResponse.bind(this), password, firstname, lastname, email, gender, dob, phoneNumber, courseCode, Rating);    \n     }\n  }\n  ftbsResponse(res: Observable<any[]>) {\n    this.response = res;\n    console.log(res);\n    alert(\"User Created\");\n    this.router.navigateByUrl('home');\n  }\n  goToHome()\n  {\n    this.router.navigateByUrl('home');\n  }\n}\n","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":20,"column":106},"end":{"row":20,"column":109},"action":"insert","lines":["our"],"id":657,"ignore":true}],[{"start":{"row":20,"column":109},"end":{"row":20,"column":111},"action":"insert","lines":["se"],"id":658,"ignore":true}],[{"start":{"row":20,"column":111},"end":{"row":20,"column":112},"action":"insert","lines":["C"],"id":659,"ignore":true}],[{"start":{"row":20,"column":111},"end":{"row":20,"column":112},"action":"remove","lines":["C"],"id":660,"ignore":true},{"start":{"row":20,"column":111},"end":{"row":20,"column":113},"action":"insert","lines":[" C"]}],[{"start":{"row":20,"column":113},"end":{"row":20,"column":115},"action":"insert","lines":["od"],"id":661,"ignore":true}],[{"start":{"row":20,"column":115},"end":{"row":20,"column":116},"action":"insert","lines":["e"],"id":662,"ignore":true}],[{"start":{"row":20,"column":117},"end":{"row":20,"column":118},"action":"insert","lines":[","],"id":663,"ignore":true}],[{"start":{"row":20,"column":118},"end":{"row":20,"column":120},"action":"insert","lines":["\"\""],"id":664,"ignore":true}],[{"start":{"row":20,"column":119},"end":{"row":20,"column":121},"action":"insert","lines":["Ra"],"id":665,"ignore":true}],[{"start":{"row":20,"column":121},"end":{"row":20,"column":122},"action":"insert","lines":["t"],"id":666,"ignore":true}],[{"start":{"row":20,"column":119},"end":{"row":20,"column":122},"action":"remove","lines":["Rat"],"id":667,"ignore":true},{"start":{"row":20,"column":119},"end":{"row":20,"column":125},"action":"insert","lines":["Rating"]}],[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":[","],"id":668,"ignore":true}],[{"start":{"row":25,"column":38},"end":{"row":25,"column":40},"action":"insert","lines":["da"],"id":669,"ignore":true}],[{"start":{"row":25,"column":38},"end":{"row":25,"column":40},"action":"remove","lines":["da"],"id":670,"ignore":true},{"start":{"row":25,"column":38},"end":{"row":25,"column":47},"action":"insert","lines":["dataNames"]}],[{"start":{"row":25,"column":47},"end":{"row":25,"column":50},"action":"insert","lines":["[i]"],"id":671,"ignore":true}],[{"start":{"row":25,"column":50},"end":{"row":25,"column":52},"action":"insert","lines":[" ="],"id":672,"ignore":true}],[{"start":{"row":25,"column":52},"end":{"row":25,"column":54},"action":"insert","lines":["\"\""],"id":673,"ignore":true}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":54},"action":"remove","lines":["=\"\""],"id":674,"ignore":true}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["+"],"id":675,"ignore":true}],[{"start":{"row":25,"column":52},"end":{"row":25,"column":54},"action":"insert","lines":["\"\""],"id":676,"ignore":true}],[{"start":{"row":25,"column":53},"end":{"row":25,"column":56},"action":"insert","lines":[" ii"],"id":677,"ignore":true}],[{"start":{"row":25,"column":56},"end":{"row":25,"column":58},"action":"insert","lines":["s "],"id":678,"ignore":true}],[{"start":{"row":25,"column":56},"end":{"row":25,"column":58},"action":"remove","lines":["s "],"id":679,"ignore":true}],[{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"remove","lines":["i"],"id":680,"ignore":true},{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["s"]}],[{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"insert","lines":[" "],"id":681,"ignore":true}],[{"start":{"row":25,"column":57},"end":{"row":25,"column":59},"action":"insert","lines":["in"],"id":682,"ignore":true}],[{"start":{"row":25,"column":59},"end":{"row":25,"column":64},"action":"insert","lines":["valui"],"id":683,"ignore":true}],[{"start":{"row":25,"column":62},"end":{"row":25,"column":64},"action":"remove","lines":["ui"],"id":684,"ignore":true}],[{"start":{"row":25,"column":62},"end":{"row":25,"column":64},"action":"insert","lines":["id"],"id":685,"ignore":true}],[{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["+"],"id":686,"ignore":true}],[{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":[" "],"id":687,"ignore":true}],[{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":[" "],"id":688,"ignore":true}],[{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":[" "],"id":689,"ignore":true}],[{"start":{"row":27,"column":8},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":690},{"start":{"row":28,"column":0},"end":{"row":28,"column":7},"action":"insert","lines":["       "]},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["i"]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["f"]}],[{"start":{"row":28,"column":9},"end":{"row":28,"column":11},"action":"insert","lines":["()"],"id":691}],[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["a"],"id":692},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["n"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["g"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["u"]}],[{"start":{"row":28,"column":10},"end":{"row":28,"column":14},"action":"remove","lines":["angu"],"id":693},{"start":{"row":28,"column":10},"end":{"row":28,"column":17},"action":"insert","lines":["angular"]}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["."],"id":694},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["i"]},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["s"]},{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["D"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["a"]},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["t"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":24},"end":{"row":28,"column":26},"action":"insert","lines":["()"],"id":695}],[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["d"],"id":696},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":29},"action":"remove","lines":["if(angular.isDate(da))"],"id":697}],[{"start":{"row":30,"column":6},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":698},{"start":{"row":31,"column":0},"end":{"row":31,"column":5},"action":"insert","lines":["     "]}],[{"start":{"row":31,"column":5},"end":{"row":31,"column":27},"action":"insert","lines":["if(angular.isDate(da))"],"id":699}],[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"remove","lines":["a"],"id":700}],[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":["o"],"id":701},{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["b"]}],[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["!"],"id":702}],[{"start":{"row":31,"column":29},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":703},{"start":{"row":32,"column":0},"end":{"row":32,"column":5},"action":"insert","lines":["     "]},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["{"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["}"]}],[{"start":{"row":32,"column":6},"end":{"row":34,"column":5},"action":"insert","lines":["","         ","     "],"id":704}],[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["a"],"id":705},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["l"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["e"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["r"]},{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":16},"action":"insert","lines":["()"],"id":706}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["d"],"id":707},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["a"]}],[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"remove","lines":["a"],"id":708},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"remove","lines":["d"]}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":17},"action":"insert","lines":["\"\""],"id":709}],[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["d"],"id":710},{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["a"]},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["t"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":[" "],"id":711},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["i"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":[" "],"id":712},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["i"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["n"]},{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":["v"]},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["a"]},{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["l"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"remove","lines":["d"],"id":713}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["i"],"id":714},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":33},"end":{"row":33,"column":34},"action":"insert","lines":[";"],"id":715}],[{"start":{"row":33,"column":34},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":716},{"start":{"row":34,"column":0},"end":{"row":34,"column":9},"action":"insert","lines":["         "]}],[{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["g"],"id":717},{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["p"]}],[{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"remove","lines":["p"],"id":718}],[{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["o"],"id":719},{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"remove","lines":["d"],"id":720}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["o"],"id":721},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["d"]},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["\\"]}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":["\\"],"id":722}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["="],"id":723},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["f"]},{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["a"]},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["l"]}],[{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["s"],"id":724},{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":["e"]},{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":[";"]}],[{"start":{"row":30,"column":6},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":725},{"start":{"row":31,"column":0},"end":{"row":31,"column":5},"action":"insert","lines":["     "]},{"start":{"row":31,"column":5},"end":{"row":32,"column":0},"action":"insert","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":32,"column":5},"action":"insert","lines":["     "]}],[{"start":{"row":31,"column":5},"end":{"row":33,"column":1},"action":"insert","lines":["var isDate = function(date) {","    return (new Date(date) !== \"Invalid Date\" && !isNaN(new Date(date)) ) ? true : false;","}"],"id":726}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "],"id":727}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":8},"action":"insert","lines":["    "],"id":728}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":28},"action":"remove","lines":["!angular.isDate(dob)"],"id":729},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["D"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["O"]}],[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":["O"],"id":730},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":["D"]},{"start":{"row":35,"column":7},"end":{"row":35,"column":9},"action":"remove","lines":["()"]}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":9},"action":"insert","lines":["()"],"id":731}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["I"],"id":732},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["S"]}],[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":["S"],"id":733},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":["I"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["i"],"id":734},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["s"]},{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["D"]},{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["a"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":12},"action":"remove","lines":["isDa"],"id":737},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["t"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":["e"],"id":738},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":["t"]},{"start":{"row":35,"column":7},"end":{"row":35,"column":9},"action":"remove","lines":["()"]}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":9},"action":"insert","lines":["()"],"id":739}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["i"],"id":740},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":10},"action":"remove","lines":["is"],"id":741},{"start":{"row":35,"column":8},"end":{"row":35,"column":10},"action":"insert","lines":["is"]}],[{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["D"],"id":742},{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":["a"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":12},"action":"remove","lines":["isDa"],"id":743},{"start":{"row":35,"column":8},"end":{"row":35,"column":14},"action":"insert","lines":["isDate"]}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":16},"action":"insert","lines":["()"],"id":744}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["d"],"id":745},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["o"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["b"]}],[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["!"],"id":746}],[{"start":{"row":31,"column":4},"end":{"row":33,"column":5},"action":"remove","lines":[" var isDate = function(date) {","        return (new Date(date) !== \"Invalid Date\" && !isNaN(new Date(date)) ) ? true : false;","    }"],"id":747},{"start":{"row":31,"column":4},"end":{"row":35,"column":1},"action":"insert","lines":["var date_regex = /^(0[1-9]|1[0-2])\\/(0[1-9]|1\\d|2\\d|3[01])\\/(19|20)\\d{2}$/ ;","if(!(date_regex.test(testDate)))","{","return false;","}"]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "],"id":748},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "],"id":749},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "],"id":750},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":31,"column":4},"end":{"row":35,"column":5},"action":"remove","lines":["var date_regex = /^(0[1-9]|1[0-2])\\/(0[1-9]|1\\d|2\\d|3[01])\\/(19|20)\\d{2}$/ ;","    if(!(date_regex.test(testDate)))","    {","    return false;","    }"],"id":751},{"start":{"row":31,"column":4},"end":{"row":34,"column":1},"action":"insert","lines":["function isValidDate(dateString) {","  var regEx = /^\\d{4}-\\d{2}-\\d{2}$/;","  return dateString.match(regEx) != null;","}"]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "],"id":752},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["v"],"id":753},{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":["A"]},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["L"]},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["I"]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["S"]}],[{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"remove","lines":["S"],"id":754},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"remove","lines":["I"]},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"remove","lines":["L"]},{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"remove","lines":["A"]},{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"remove","lines":["v"]}],[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":["V"],"id":755},{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":["a"]},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["l"]}],[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["i"],"id":756},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["d"]}],[{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["D"],"id":757},{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["a"]}],[{"start":{"row":39,"column":9},"end":{"row":39,"column":15},"action":"remove","lines":["goodDa"],"id":758},{"start":{"row":39,"column":9},"end":{"row":39,"column":17},"action":"insert","lines":["goodData"]}],[{"start":{"row":49,"column":11},"end":{"row":49,"column":16},"action":"remove","lines":["Tutor"],"id":759,"ignore":true},{"start":{"row":49,"column":11},"end":{"row":49,"column":15},"action":"insert","lines":["User"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1543550753406}