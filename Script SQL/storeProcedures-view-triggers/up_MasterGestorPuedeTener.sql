/************************************************************************************************
   Nombre:    up_MasterGestorPuedeTener     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo PuedeTener 
   -SelectLista: muestra una lista de todos las PuedeTener en todos los productos 
   -SelectEspecifico: muestra un PuedeTener especifico para un producto
   -Update: actualiza todos los valores del PuedeTener usando IDReceta,CodigoDBarras como llaves de busqueda
   -Delete: elimina todos los valores del PuedeTener usando IDReceta,CodigoDBarras como llaves de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorPuedeTener(
    @CodigoNutricionista  INT ,
    @Cedula INT ,
    @ChatID INT,
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.PUEDE_TENER(CodigoNutricionista,Cedula,ChatID)
            VALUES(@CodigoNutricionista,@Cedula,@ChatID);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PUEDE_TENER
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PUEDE_TENER  
            WHERE  CodigoNutricionista=@CodigoNutricionista AND Cedula=@Cedula
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PUEDE_TENER
            SET CodigoNutricionista =CodigoNutricionista,
                Cedula =@Cedula,
                ChatID =@ChatID
            WHERE  CodigoNutricionista=@CodigoNutricionista AND Cedula=@Cedula
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PUEDE_TENER
            WHERE  CodigoNutricionista=@CodigoNutricionista AND Cedula=@Cedula
        END
  END