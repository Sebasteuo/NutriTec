/************************************************************************************************
   Nombre:   CREATE PROCEDURE up_MasterGestorUsuario (     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Usuario 
   -SelectLista: muestra una lista de todos los Usuario con la infromacion necesaria para el Nutricionista
   -SelectEspecifico: muestra un Usuario con la infromacion necesaria para el Nutricionista
   -Update: actualiza todos los valores del Usuario usando el cedula como llave de busqueda
   -Delete: elimina todos los valores del Usuario usando el cedula como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorUsuario (     
    @Cedula INT,
    @Nombre1 VARCHAR(50),
    @Nombre2 VARCHAR(50),
    @Apellido1 VARCHAR(50),
    @Apellido2 VARCHAR(50) ,
    @FechaNacimiento DATE,
    @Peso DECIMAL(5,2),
    @Altura DECIMAL(4,2),
    @Pais VARCHAR(100),
    @Correo VARCHAR(50),
    @Password VARCHAR(50),
    @PorcentajeMusculo INT,
    @PorcentajeGrasa INT,
     @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.USUARIO(Cedula,Nombre1,Nombre2,Apellido1,Apellido2,FechaNacimiento,Peso,Altura,Pais,Correo,Password,PorcentajeMusculo,PorcentajeGrasa)
            VALUES(@Cedula,@Nombre1,@Nombre2,@Apellido1,@Apellido2,@FechaNacimiento,@Peso,@Altura,@Pais,@Correo,@Password,@PorcentajeMusculo,@PorcentajeGrasa);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *,(Peso/(Altura*Altura)) AS IMC,(DATEDIFF(YEAR, FechaNacimiento, GetDate())  ) AS EDAD
            FROM   Dbo.USUARIO
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *,(Peso/(Altura*Altura)) AS IMC,(DATEDIFF(YEAR, FechaNacimiento, GetDate())  ) AS EDAD
            FROM Dbo.USUARIO  
            WHERE Nombre1 = @Nombre1 AND Apellido1 = @Apellido1;
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.USUARIO
            SET     Cedula=@Cedula,
                    Nombre1=@Nombre1,
                    Nombre2=@Nombre2,
                    Apellido1=@Apellido1,
                    Apellido2=@Apellido2,
                    FechaNacimiento=@FechaNacimiento,
                    Peso=@Peso,
                    Altura=@Altura,
                    Pais=@Pais,
                    Correo=@Correo,
                    Password=@Password,
                    PorcentajeMusculo=@PorcentajeMusculo,
                    PorcentajeGrasa=@PorcentajeGrasa
            WHERE  Cedula=@Cedula
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.USUARIO
            WHERE  Cedula=@Cedula
        END
  END