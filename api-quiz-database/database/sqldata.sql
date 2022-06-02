

user quizdatabase;

CREATE TABLE IF NOT EXISTS `userdetailsquiz` (
 `id` int(10) NOT NULL AUTO_INCREMENT,
 `firstname` varchar(30) NOT NULL,
 `lastname` varchar(30) NOT NULL,
 
 `email` varchar(30) NOT NULL,
 `password` varchar(15) NOT NULL,
 `phonenumber` varchar(15) NOT NULL,
 
 PRIMARY KEY (`id`)
);

select * from userdetailsquiz

