/************************************************************************************************
   Nombre:   CREATE PROCEDURE up_MasterGestorAdministrador (     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Administrador 
   -SelectListaNutricionista: muestra una lista de todos los Administrador 
   -SelectEspecificoNutricionista: muestra un Administrador 
   -Update: actualiza todos los valores del Administrador usando el AdminID como llave de busqueda
   -Delete: elimina todos los valores del Administrador usando el AdminID como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorAdministrador (     
    @AdminID INT,
    @Correo VARCHAR(50),
    @Password VARCHAR(50),
     @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.ADMINISTRADOR(AdminID,Correo,Password)
            VALUES(@AdminID,@Correo,@Password);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.ADMINISTRADOR
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.ADMINISTRADOR  
            WHERE Correo = @Correo AND AdminID = @AdminID;
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.ADMINISTRADOR
            SET     AdminID=@AdminID,
                    Correo=@Correo,
                    Password=@Password,
            WHERE  AdminID=@AdminID
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.ADMINISTRADOR
            WHERE  AdminID=@AdminID
        END
  END