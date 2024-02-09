drop table expense;
drop table category;

create table category (
	id        number(6) not null,
	catg_name varchar2(14) not null,
	constraint catg_primary_key primary key ( id )
);
create sequence category_seq minvalue 1 maxvalue 9999999 start with 1 increment by 1 cache 20;

create table expense (
	id          number(6) not null,
	description varchar2(14) not null,
	amount      number(10,2) not null,
	category_id number(6) not null,
	trash_flg   varchar2(1) default 'N' not null,
	created_dt  date default sysdate not null,
	constraint cat_foreign_key foreign key ( category_id )
		references category ( id ),
	constraint exp_primary_key primary key ( id )
);

create sequence expense_seq minvalue 1 maxvalue 9999999 start with 1 increment by 1 cache 20;

insert into category values (
	category_seq.nextval,
	'Groceries'
);
insert into category values (
	category_seq.nextval,
	'Entertainment'
);
insert into category values (
	category_seq.nextval,
	'Travel'
);
insert into category values (
	category_seq.nextval,
	'Restaurant'
);
insert into category values (
	category_seq.nextval,
	'Miscellaneous'
);

insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'aaaa',
	10.25,
	1
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'bbbb',
	11.50,
	2
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'cccc',
	12.75,
	3
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'dddd',
	13.00,
	4
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'eeee',
	14.25,
	5
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'ffff',
	15.50,
	1
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'ffff',
	15.50,
	2
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'ffff',
	15.50,
	3
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'gggg',
	15.70,
	2
);
insert into expense (
	id,
	description,
	amount,
	category_id
) values (
	expense_seq.nextval,
	'hhhh',
	16.00,
	3
);



commit;

select *
  from category;
select *
  from expense;

select e.id,
       e.description,
       e.amount,
       c.catg_name,
       to_char(
	       e.created_dt,'Month DD, YYYY'
       ) created_dt
  from expense e,
       category c
 where e.category_id = c.id
   and e.trash_flg = 'N';

create or replace view expense_details as
	select e.id,
	       e.description,
	       e.amount,
	       c.catg_name,
	       to_char(
		       e.created_dt,'Month DD, YYYY'
	       ) created_dt
	  from expense e,
	       category c
	 where e.category_id = c.id
	   and e.trash_flg = 'N';

select *
  from expense_details;


select id,
       description,
       amount,
       catg_name,
       created_dt
  from expense_details;