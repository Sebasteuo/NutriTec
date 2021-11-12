/*                             poblacion de administrador                                                 */

INSERT INTO Dbo.ADMINISTRADOR(AdminID,Correo,Password)VALUES(0,'ad@mi.n','123');

/*                             poblacion de Nutricionista                                                 */
INSERT INTO Dbo.NUTRICIONISTA(CodigoNutricionista,Cedula,Nombre1,Nombre2,Apellido1,Apellido2,Direccion,Foto,FechaNacimiento,Peso,Altura,NumeroTarjetacredito,TipoCobro,Correo,Password)VALUES(  CodigoNutricionista  ,123456789,'a','b','c','d','por ahi ','url','1990-02-25',123.45,1.93,1234545612378970,1,'g@2g.com',123);
INSERT INTO Dbo.NUTRICIONISTA(CodigoNutricionista,Cedula,Nombre1,Nombre2,Apellido1,Apellido2,Direccion,Foto,FechaNacimiento,Peso,Altura,NumeroTarjetacredito,TipoCobro,Correo,Password)VALUES(1,857964123,'ad','bc','de','ef','casiniestan','url','1990-02-26',87.5,1.83,1234567812345670,2,'g@g.com',124);
INSERT INTO Dbo.NUTRICIONISTA(CodigoNutricionista,Cedula,Nombre1,Nombre2,Apellido1,Apellido2,Direccion,Foto,FechaNacimiento,Peso,Altura,NumeroTarjetacredito,TipoCobro,Correo,Password)VALUES(2,478596002,'adol','bcok','desd','efas','porahistan','url','1990-02-27',87.5,1.83,4564567812345670,3,'g23@g.com',124);

/*                             poblacion de Usuario                                                 */
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(987654321,'andr','asd','kenf','danf','1997-02-25','85.25','1.8','Unova','h@jl.l',12345,60,40);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(465166714,'jua','gab','bagt','degt','1992-02-26','55','1.7','Galar','k@lkj.n',7895,30,30);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(610654638,'Isaura','Yaneth','Dominguez','Sanz','1980-01-13','60','1.97','Netherlands','bhtower@optonline.net',8466,60,40);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(256183825,'Lilia','Pamela','Bravo','Roman','1980-11-25','53','1.98','Dominica','ijackson@live.com',5145,30,30);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(570175102,'Rebeca','Celsa','Vicente','Herrero','1993-02-20','97','1.98','Sudan','dialworld@live.com',3850,60,40);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(123592803,'Oralia','Magali','Ibáñez','Caballero','2001-12-25','89','1.95','Kosovo','nasor@optonline.net',1150,30,30);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(267774653,'Noelia','Amanda','Montero','Cortés','2012-12-28','72','1.73','Venezuela','yxing@att.net',8303,60,40);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(356359990,'Candelario','Olegario','Castro','Pastor','1991-04-01','96','1.96','Azerbaijan','saridder@yahoo.com',3234,30,30);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(230668994,'Erasmo','Ildefonso','Reyes','Fernández','2000-06-04','94','1.82','Yemen','dogdude@outlook.com',1823,60,40);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(106644803,'Emanuel','Isauro','Gil','Vidal','2000-10-20','95','1.77','Norway','hermanab@yahoo.ca',4666,30,30);
INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)VALUES(267563602,'Heliodoro','Inocencio','Marín','Castillo','2013-02-19','69','1.74','Grenada','peoplesr@icloud.com',1697,60,40);


/*                             poblacion de Nutricionista                                                 */
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(2147483,'arroz','arroz blanco marca indiana',100,130,1,1,6,3,0,10,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(2147484,'frijoles','frijol negro marca don frijol',100,91,0,384,16,6,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(8161551,'pollo','pechuga de pollo sin piel a la plancha',100,195,0,393,0,30,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(5465135,'huevo ','revuelto',100,887,16,224,2,13,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(5465136,'huevo ','revuelto',100,812,14,518,1,13,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(761325,'pan ','blanco marca bimbo',100,1113,3,681,50,7,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(3488716,'jamon','1 tajada de jamon de pavo',28,149,1,316,1,5,0,0,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(8745,'queso','estilo turrialba',30,87,7,100,1,5,0,23,0);
INSERT INTO Dbo.PRODUCTO(CodigoDBarras,Nombre,Descripcion,Porcion,Energia,Grasa,Sodio,Carbohidratos,Proteina,Hierro,Calcio,Aprobado)VALUES(15485,'Carne de Res Molida','95% Magra / 5% de Materia Grasa',100,573,5,66,0,21,0,0,0);

/*                             poblacion de Plan de comida                                                 */
INSERT INTO Dbo.PLANDCOMIDA(IDPlan,Nombre)VALUES(1,'almuerzo tipo1');

/*                             poblacion de Receta                                                 */
INSERT INTO Dbo.RECETA(IDReceta,Nombre)VALUES(1,'casado con pollo');

/*                             poblacion de puede tener                                                 */
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(0,987654321,1);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(0,465166714,2);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(0,610654638,3);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(1,256183825,4);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(1,570175102,5);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(1,123592803,6);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(1,267774653,7);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(2,356359990,8);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(2,230668994,9);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(2,106644803,10);
INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)VALUES(2,267563602,11);

/*                             poblacion de registra medidas                                                 */
INSERT INTO Dbo.REGISTRAMEDIDAS(Cedula,Zona,Medida,FechaRegistro)VALUES(987654321,'admonen',65,'2021-11-20, 11:36:14');

/*                             poblacion de Nutricionista_Plan                                                */
INSERT INTO Dbo.NUTRICIONISTA_PLAN(IDPlan,CodigoNutricionista)VALUES(1,1);

/*                             poblacion de ProductoXPlan                                                 */
INSERT INTO Dbo.PRODUCTOXPLAN(IDPlan,CodigoDBarras)VALUES(1,2147483);
INSERT INTO Dbo.PRODUCTOXPLAN(IDPlan,CodigoDBarras)VALUES(1,2147484);
INSERT INTO Dbo.PRODUCTOXPLAN(IDPlan,CodigoDBarras)VALUES(1,8161551);

/*                             poblacion de RecetaXPlan                                                 */
INSERT INTO Dbo.RECETAXPLAN(IDPlan,IDReceta)VALUES(1,1);


/*                             poblacion de ProductoXReceta                                                 */
INSERT INTO Dbo.PRODUCTOXRECETA(CodigoDBarras,IDReceta)VALUES(2147483,1);
INSERT INTO Dbo.PRODUCTOXRECETA(CodigoDBarras,IDReceta)VALUES(2147484,1);
INSERT INTO Dbo.PRODUCTOXRECETA(CodigoDBarras,IDReceta)VALUES(8161551,1);

/*                             poblacion de Producto_vitamina                                                 */
INSERT INTO Dbo.PRODUCTO_VITAMINA(CodigoDBarras,Vitaminas)VALUES(2147483,'vitamina c');
