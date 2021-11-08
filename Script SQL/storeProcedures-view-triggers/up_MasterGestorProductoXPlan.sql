/************************************************************************************************
   Nombre:    up_MasterGestorProductoXPlan     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo ProductoXPlan 
   -SelectLista: muestra una lista de todos las ProductoXPlan en todos los productos 
   -SelectEspecifico: muestra un ProductoXPlan especifico para un producto
   -Update: actualiza todos los valores del ProductoXPlan usando IDPlan,CodigoDBarras como llaves de busqueda
   -Delete: elimina todos los valores del ProductoXPlan usando IDPlan,CodigoDBarras como llaves de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorProductoXPlan(
    @IDPlan INT,
    @CodigoDBarras  INT,
    @IdTiempo INT,  
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.PRODUCTOXPLAN(IDPlan,CodigoDBarras,IdTiempo)
            VALUES(@IDPlan,@CodigoDBarras,@IdTiempo);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PRODUCTOXPLAN
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PRODUCTOXPLAN  
            WHERE  IDPlan=@IDPlan AND CodigoDBarras=@CodigoDBarras
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PRODUCTOXPLAN
            SET CodigoDBarras =@CodigoDBarras,
                @IDPlan =@IDPlan,
                @IdTiempo=IdTiempo
            WHERE  IDPlan=@IDPlan AND CodigoDBarras=@CodigoDBarras
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PRODUCTOXPLAN
            WHERE  IDPlan=@IDPlan AND CodigoDBarras=@CodigoDBarras
        END
  END