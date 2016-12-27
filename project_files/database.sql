
drop table user;

CREATE TABLE user (user_id int(10),first_name VARCHAR(20), middle_name VARCHAR(20), last_name VARCHAR(20),gender VARCHAR(10), country VARCHAR(10), dob DATE, address VARCHAR(30), mobile VARCHAR(10), email VARCHAR(30),user_type varchar(10), created_time DATE,created_by VARCHAR(30), modified_by VARCHAR(30), modified_time DATE, PRIMARY KEY (user_id));

insert into user values(1, 'first1', 'middle1', 'last1', 'M', 'India', '12-12-1978', 'Pune1', '9876543210', 'first1@gmail.com','admin','10-10-2010',1,'20-10-2010','');
insert into user values(2, 'first2', 'middle2', 'last2', 'F', 'India', '11-12-1978', 'Pune2', '9876543210', 'first2@gmail.com','regular','11-10-2010',1,'21-10-2010','');
insert into user values(3, 'first3', 'middle3', 'last3', 'M', 'India', '13-12-1978', 'Pune3', '9876543210', 'first1@gmail.com','admin','13-10-2010',1,'22-10-2010','');
insert into user values(4, 'first4', 'middle4', 'last4', 'M', 'India', '14-12-1978', 'Pune4', '9876543210', 'first1@gmail.com','admin','14-10-2010',1,'23-10-2010','');
insert into user values(5, 'first5', 'middle5', 'last5', 'M', 'India', '15-12-1978', 'Pune5', '9876543210', 'first1@gmail.com','admin','15-10-2010',1,'24-10-2010','');



drop table images;

create table images(image_id int(5), image_path varchar(30), created_time DATE,created_by VARCHAR(30), modified_by VARCHAR(30), modified_time DATE);

insert into images values(1,'images/yeoman.png','15-10-2010',1,'24-10-2010','');
insert into images values(1,'images/logo.jng','15-10-2010',1,'24-10-2010','');
insert into images values(2,'images/logo.jng','15-10-2010',1,'24-10-2010','');
insert into images values(2,'images/yeoman.png','15-10-2010',1,'24-10-2010','');
insert into images values(3,'images/logo.jng','15-10-2010',1,'24-10-2010','');
insert into images values(3,'images/yeoman.png','15-10-2010',1,'24-10-2010','');
insert into images values(4,'images/yeoman.png','15-10-2010',1,'24-10-2010','');
insert into images values(5,'images/yeoman.png','15-10-2010',1,'24-10-2010','');


drop table parts_album;

create table parts_album ( album_id int(5),image_id int(5), created_time DATE,created_by VARCHAR(30), modified_by VARCHAR(30), modified_time DATE, PRIMARY KEY (album_id));

insert into parts_album values(1,1,'15-10-2010',1,'24-10-2010','');
insert into parts_album values(2,2,'15-10-2010',1,'24-10-2010','');
insert into parts_album values(3,3,'15-10-2010',1,'24-10-2010','');
insert into parts_album values(4,4,'15-10-2010',1,'24-10-2010','');
insert into parts_album values(5,5,'15-10-2010',1,'24-10-2010','');


drop table computer_parts;

create table computer_parts ( part_id int(5), part_name varchar(50), relatedwith_mainpart varchar(40), album_id int(5), part_cost int(5), short_desc varchar(50), long_desc varchar(100), moreinfo_links varchar(100), part_types varchar(100), created_time DATE,created_by VARCHAR(30), modified_by VARCHAR(30), modified_time DATE, PRIMARY KEY (part_id), FOREIGN KEY (album_id) REFERENCES parts_album(album_id));

insert into computer_parts values(1,'part-1','CPU',1,500,'short-desc-1','long-desc-1','www.google.com','','15-10-2010',1,'24-10-2010','');
insert into computer_parts values(2,'part-2','CPU',2,2500,'short-desc-2','long-desc-2','www.google.com','','15-10-2010',1,'24-10-2010','');
insert into computer_parts values(3,'part-3','CPU',3,3500,'short-desc-3','long-desc-3','www.google.com','','15-10-2010',1,'24-10-2010','');
insert into computer_parts values(4,'part-4','CPU',4,4500,'short-desc-4','long-desc-4','www.google.com','','15-10-2010',1,'24-10-2010','');
insert into computer_parts values(5,'part-5','CPU',5,5500,'short-desc-5','long-desc-5','www.google.com','','15-10-2010',1,'24-10-2010','');



drop table questions;

CREATE TABLE questions (ques_id int(10),short_desc VARCHAR(50), long_desc VARCHAR(200), relatedwith_section VARCHAR(40), relatedwith_part int(5), complexity int(5), created_time DATE,created_by VARCHAR(30), modified_time DATE, modified_by VARCHAR(30), PRIMARY KEY (ques_id), FOREIGN KEY (relatedwith_part) REFERENCES computer_parts(part_id));

insert into questions values(101,'short-desc-1','long-desc-1','hardware',1,10,'15-10-2010',1,'24-10-2010','');
insert into questions values(102,'short-desc-2','long-desc-2','software',2,9,'15-10-2010',1,'24-10-2010','');
insert into questions values(103,'short-desc-3','long-desc-3','hardware',1,8,'15-10-2010',1,'24-10-2010','');
insert into questions values(104,'short-desc-4','long-desc-4','software',3,7,'15-10-2010',1,'24-10-2010','');
insert into questions values(105,'short-desc-5','long-desc-5','hardware',2,0,'15-10-2010',1,'24-10-2010','');


drop table answers;

CREATE TABLE answers (ans_id int(10), short_desc VARCHAR(50), long_desc VARCHAR(200), relatedwith_section VARCHAR(40), relatedwith_part int(5), complexity int(5),reference varchar(100), created_time DATE,created_by VARCHAR(30), modified_time DATE, modified_by VARCHAR(30), PRIMARY KEY (ans_id), FOREIGN KEY (relatedwith_part) REFERENCES computer_parts(part_id));

insert into answers values(201,'short-desc-1','long-desc-1','hardware',2,10,'stackoverfolw.com,google etc','15-10-2010',1,'24-10-2010','');
insert into answers values(202,'short-desc-2','long-desc-2','software',2,0,'stackoverfolw.com,google etc','15-10-2010',1,'24-10-2010','');
insert into answers values(203,'short-desc-3','long-desc-3','hardware',1,1,'stackoverfolw.com,google etc','15-10-2010',1,'24-10-2010','');
insert into answers values(204,'short-desc-4','long-desc-4','software',5,5,'stackoverfolw.com,google etc','15-10-2010',1,'24-10-2010','');
insert into answers values(205,'short-desc-5','long-desc-5','hardware',4,3,'stackoverfolw.com,google etc','15-10-2010',1,'24-10-2010','');
