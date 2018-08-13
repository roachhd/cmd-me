---
---

jQuery(function($, undefined) {
$('#terminal').terminal(function(command, term) {
    if (command !== '') {

			command = command.trim();
			var custecho = function(arg){
				term.echo(arg);
			}

		switch(command){
			{% for entry in site.data.cv %}
				case "{{ entry.info }}":custecho("{{ entry.description }}");
				break;
			{% endfor %}

			case 'help':custecho('email: contact me (I\'d love to hear from you!) \ngithub: see my github page \nInstagram: see my Instagram page \nproject: learn about my past projects \nworkshop: see my steam workshop projects');
				break;
			
			case 'arbitrary': term.echo('               .-. \'.-\'\r\n                __\\\/____\r\n              .\'        \'.\r\n             \/            \\         \/\\.\/\\\r\n            \/              \\        |   |\r\n           \/                \\       \\   \/\r\n         ~|      _           |~~~~~~~| |~~~~~\r\n        \/~|     \/ )          |^~~~~^~| |~^~^\/\r\n       \/~~|    (o\/            \\~^~~~\/  \/~^~\/\r\n      \/~^~\\__                  \\__.\'  \/~^~\/\r\n     \/~~~~~~\/________________________\/~^~\/\r\n    \/~^~^~^^~^~^^~^~^~^~^^~^~^~^^~^~^~^~\/\r\n   \/~^~^~^~^^~^~^~^~^^~^~^~^~^^~^~^~^~^\/\r\n   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', {
					finalize: function(div) {
					div.css("color", "blue");
					}
				});
				break;
			case 'yam': term.echo('               .,;>>%%%%%>>;,.\r\n            .>%%%%%%%%%%%%%%%%%%%%>,.\r\n          .>%%%%%%%%%%%%%%%%%%>>,%%%%%%;,.\r\n        .>>>>%%%%%%%%%%%%%>>,%%%%%%%%%%%%,>>%%,.\r\n      .>>%>>>>%%%%%%%%%>>,%%%%%%%%%%%%%%%%%,>>%%%%%,.\r\n    .>>%%%%%>>%%%%>>,%%>>%%%%%%%%%%%%%%%%%%%%,>>%%%%%%%,\r\n   .>>%%%%%%%%%%>>,%%%%%%>>%%%%%%%%%%%%%%%%%%,>>%%%%%%%%%%.\r\n  .>>%%%%%%%%%%>>,>>>>%%%%%%%%%%\'..`%%%%%%%%,;>>%%%%%%%%%>%%.\r\n .>>%%%>>>%%%%%>,%%%%%%%%%%%%%%.%%%,`%%%%%%,;>>%%%%%%%%>>>%%%%.\r\n >>%%>%>>>%>%%%>,%%%%%>>%%%%%%%%%%%%%`%%%%%%,>%%%%%%%>>>>%%%%%%.\r\n >>%>>>%%>>>%%%%>,%>>>%%%%%%%%%%%%%%%%`%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%,>%%%%%%%%%%%%%%%%%%%\'%%%,>>%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%%,>%%%>>>%%%%%%%%%%%%%%%,>>%%%%%%%%>>>>%%%%%%%%%%.\r\n >>%%%%%%%%;%;%;%%;,%>>>>%%%%%%%%%%%%%%%,>>>%%%%%%>>;\";>>%%%%%%%%%%%.\r\n `>%%%%%%%%%;%;;;%;%,>%%%%%%%%%>>%%%%%%%%,>>>%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  >>%%%%%%%%%,;;;;;%%>,%%%%%%%%>>>>%%%%%%%%,>>%%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  `>>%%%%%%%%%,%;;;;%%%>,%%%%%%%%>>>>%%%%%%%%,>%%%%%%\'%%%%%%%%%%%%%%%%%%>>.\r\n   `>>%%%%%%%%%%>,;;%%%%%>>,%%%%%%%%>>%%%%%%\';;;>%%%%%,`%%%%%%%%%%%%%%>>%%>.\r\n    >>>%%%%%%%%%%>> %%%%%%%%>>,%%%%>>>%%%%%\';;;;;;>>,%%%,`%    `;>%%%%%%>>%%\r\n    `>>%%%%%%%%%%>> %%%%%%%%%>>>>>>>>;;;;\'.;;;;;>>%%\'  `%%\'         ;>%%%%%>\r\n     >>%%%%%%%%%>>; %%%%%%%%>>;;;;;;\'\'    ;;;;;>>%%%                  ;>%%%%\r\n     `>>%%%%%%%>>>, %%%%%%%%%>>;;\'        ;;;;>>%%%\'                   ;>%%%\r\n      >>%%%%%%>>>\':.%%%%%%%%%%>>;        .;;;>>%%%%                   ;>%%%\'\r\n      `>>%%%%%>>> ::`%%%%%%%%%%>>;.      ;;;>>%%%%\'                  ;>%%%\'\r\n       `>>%%%%>>> `:::`%%%%%%%%%%>;.     ;;>>%%%%%                  ;>%\r\n        `>>%%%%>>, `::::`%%%%%%%%%%>,   .;>>%%%%%\'                   ;>%\r\n         `>>%%%%>>, `:::::`%%%%%%%%%>>. ;;>%%%%%%                    ;>%\r\n          `>>%%%%>>, :::::::`>>>%%%%>>> ;;>%%%%%\'                     ;>%,\r\n           `>>%%%%>>,::::::,>>>>>>>>>>\' ;;>%%%%%                       ;%%\r\n             >>%%%%>>,:::,%%>>>>>>>>\'   ;>%%%%%.                        ;%%\r\n              >>%%%%>>``%%%%%>>>>>\'     `>%%%%%%.\r\n              >>%%%%>> `@@a%%%%%%\'     .%%%%%%%%%.\r\n              `a@@a%@\'    `%a@@\'       `a@@a%a@@a\'');
				break;
			default:
				try{
					var result = window.eval(command);
					if (result !== undefined) {
						term.echo(new String(result));
					}
				} catch(e) {
					term.echo('Unrecognized command. Type help or spam your tab key.');
				}
				break;
		}
    } else {
       term.echo('');
    }
	}, {
		completion: [
			'help',
			'yam',
			'arbitrary',
			'project',
			'workshop',
			'Instagram',
			'email',
			'github'
		],
		greetings: function(callback){
			const greet = 'Welcome to Katie\'s Personal Site!  Type help for commands.';
			callback(greet);
		},
    name: 'Katie Ball', //not necessary
    height: 800,
    prompt: '\u27B3 '});
});
