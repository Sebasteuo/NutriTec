/************************************************************************************************
   Nombre:    up_MasterGestorNutricionista_Plan     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Producto 
   -SelectLista: muestra una lista de todos los Producto 
   -SelectEspecifico: muestra un Nutricionista_Plan 
   -Update: actualiza todos los valores del Nutricionista_Plan usando ambas llave de busqueda
   -Delete: elimina todos los valores del Nutricionista_Plan usando ambas llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorNutricionista_Plan (     
    @IDPlan INT,
    @CodigoNutricionista  INT, 
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.NUTRICIONISTA_PLAN(IDPlan,CodigoNutricionista)
            VALUES(@IDPlan,@CodigoNutricionista);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PRODUCTO
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.NUTRICIONISTA_PLAN  
            WHERE  IDPlan=@IDPlan AND CodigoNutricionista=@CodigoNutricionista
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.NUTRICIONISTA_PLAN
            SET IDPlan =@IDPlan,
                CodigoNutricionista =@CodigoNutricionista
            WHERE  IDPlan=@IDPlan AND CodigoNutricionista=@CodigoNutricionista
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.NUTRICIONISTA_PLAN
            WHERE  IDPlan=@IDPlan AND CodigoNutricionista=@CodigoNutricionista
        END
  END