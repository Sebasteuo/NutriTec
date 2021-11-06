/************************************************************************************************
   IDPlan:    up_MasterGestorRecetaXPlan     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo RecetaXPlan 
   -SelectLista: muestra una lista de todos las RecetaXPlan en todos los productos 
   -SelectEspecifico: muestra un RecetaXPlan especifico para un producto
   -Update: actualiza todos los valores del RecetaXPlan usando IDReceta, como llave de busqueda
   -Delete: elimina todos los valores del RecetaXPlan usando IDReceta, como llave de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorRecetaXPlan(
    @IDPlan INT,
    @IDReceta INT,
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.RECETAXPLAN(IDPlan,IDReceta)
            VALUES(@IDPlan,@IDReceta);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.RECETAXPLAN
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.RECETAXPLAN    
            WHERE  IDReceta=@IDReceta AND IDPlan=@IDPlan 
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.RECETAXPLAN
            SET IDReceta =@IDReceta,
                IDPlan =@IDPlan
            WHERE  IDReceta=@IDReceta AND IDPlan=@IDPlan 
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.RECETAXPLA
            WHERE  IDReceta=@IDReceta AND IDPlan=@IDPlan 
        END
  END