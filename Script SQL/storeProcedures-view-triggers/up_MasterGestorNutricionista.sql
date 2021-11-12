/************************************************************************************************
   Nombre:   up_MasterGestorNutricionista  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo nutricionista 
   -SelectListaNutricionista: muestra una lista de todos los nutricionista con la infromacion necesaria para el cliente
   -SelectEspecificoNutricionista: muestra un nutricionista con la infromacion necesaria para el cliente
   -SelectListaAdmin:muestra una lista de todos los nutricionista con la infromacion necesaria para el admin
   -SelectEspecificoAdmin:muestra un nutricionista con la infromacion necesaria para el admin
   -Update: actualiza todos los valores del nutricionista usando el CodigoNutricionista como llave de busqueda
   -Delete: elimina todos los valores del nutricionista usando el CodigoNutricionista como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorNutricionista (
    @CodigoNutricionista  INT,
    @Cedula INT,
    @Nombre1 VARCHAR(50),
    @Nombre2 VARCHAR(50),
    @Apellido1 VARCHAR(50),
    @Apellido2 VARCHAR(50) ,
    @Direccion VARCHAR(100),
    @Foto VARCHAR(50),
    @FechaNacimiento DATE,
    @Peso DECIMAL(5,2),
    @Altura DECIMAL(3,2),
    @NumeroTarjetacredito VARCHAR(20),
    @TipoCobro CHAR(50),
    @Correo VARCHAR(50),
    @Password VARCHAR(50),
     @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.NUTRICIONISTA(CodigoNutricionista,Cedula,Nombre1,Nombre2,Apellido1,Apellido2,Direccion,Foto,FechaNacimiento,Peso,Altura,NumeroTarjetacredito,TipoCobro,Correo,Password)
            VALUES(@CodigoNutricionista,@Cedula,@Nombre1,@Nombre2,@Apellido1,@Apellido2,@Direccion,@Foto,@FechaNacimiento,@Peso,@Altura,@NumeroTarjetacredito,@TipoCobro,@Correo,@Password)
        END

      IF @StatementType = 'SelectListaNutricionista'
        BEGIN
            SELECT Nombre1, Nombre2, Apellido1,Apellido2,Foto,Direccion,(Peso/(Altura*Altura)) AS IMC
            FROM   Dbo.NUTRICIONISTA
        END

        IF @StatementType = 'SelectEspecificoNutricionista'
        BEGIN
            SELECT Nombre1, Nombre2, Apellido1,Apellido2,Foto,Direccion,(Peso/(Altura*Altura)) AS IMC
            FROM dbo.NUTRICIONISTA  
            WHERE Nombre1 = @Nombre1 AND Apellido1 = @Apellido1;
        END
      IF @StatementType = 'SelectListaAdmin'
        BEGIN
            SELECT *,(Peso/(Altura*Altura)) AS IMC,(DATEDIFF(YEAR, FechaNacimiento, GetDate())  ) AS EDAD
            FROM   Dbo.NUTRICIONISTA
        END

        IF @StatementType = 'SelectEspecificoAdmin'
        BEGIN
            SELECT *,(Peso/(Altura*Altura)) AS IMC,(DATEDIFF(YEAR, FechaNacimiento, GetDate())  ) AS EDAD
            FROM dbo.NUTRICIONISTA  
            WHERE Nombre1 = @Nombre1 AND Apellido1 = @Apellido1;
        END  


      IF @StatementType = 'Update'
        BEGIN
            UPDATE dbo.NUTRICIONISTA
            SET     CodigoNutricionista=@CodigoNutricionista,
                    Cedula=@Cedula,
                    Nombre1=@Nombre1,
                    Nombre2=@Nombre2,
                    Apellido1=@Apellido1,
                    Apellido2=@Apellido2,
                    Direccion=@Direccion,
                    Foto=@Foto,
                    FechaNacimiento=@FechaNacimiento,
                    Peso=@Peso,
                    Altura=@Altura,
                    NumeroTarjetacredito=@NumeroTarjetacredito,
                    TipoCobro=@TipoCobro,
                    Correo=@Correo,
                    Password=@Password
            WHERE  CodigoNutricionista = @CodigoNutricionista
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM dbo.NUTRICIONISTA
            WHERE  CodigoNutricionista = @CodigoNutricionista
        END
  END