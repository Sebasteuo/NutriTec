/************************************************************************************************
   Nombre:    up_MasterGestorProductoXReceta     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo ProductoXReceta 
   -SelectLista: muestra una lista de todos las ProductoXReceta en todos los productos 
   -SelectEspecifico: muestra un ProductoXReceta especifico para un producto
   -Update: actualiza todos los valores del ProductoXReceta usando IDReceta,CodigoDBarras como llaves de busqueda
   -Delete: elimina todos los valores del ProductoXReceta usando IDReceta,CodigoDBarras como llaves de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorProductoXReceta(
    @CodigoDBarras  INT,  
    @IDReceta INT,
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
        INSERT INTO Dbo.PRODUCTOXRECETA(CodigoDBarras,IDReceta)
        VALUES(@CodigoDBarras,@IDReceta);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PRODUCTOXRECETA
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PRODUCTOXRECETA  
            WHERE  IDReceta=@IDReceta AND CodigoDBarras=@CodigoDBarras
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PRODUCTOXRECETA
            SET CodigoDBarras =@CodigoDBarras,
                IDReceta =@IDReceta
            WHERE  IDReceta=@IDReceta AND CodigoDBarras=@CodigoDBarras
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PRODUCTOXRECETA
            WHERE  IDReceta=@IDReceta AND CodigoDBarras=@CodigoDBarras
        END
  END