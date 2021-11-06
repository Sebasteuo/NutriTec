/************************************************************************************************
   Nombre:    up_MasterGestorProducto_Vitamina     
  
   Proposito:  Crea, muestra (lista), muestra (especifico), modifica, elimina elemento Nutricionista 
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          1/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas: para poder obtner las opcion de insert, select, update y delete la palabras claves son
   -Insert:crea un nuevo Producto 
   -SelectLista: muestra una lista de todos las vitaminas en todos los productos 
   -SelectEspecifico: muestra un vitamina especifico para un producto
   -Update: actualiza todos los valores del vitaminas usando CodigoDBarras,Vitaminas como llaves de busqueda
   -Delete: elimina todos los valores del vitaminas usando CodigoDBarras,Vitaminas como llaves de busqueda


*************************************************************************************************/


CREATE PROCEDURE up_MasterGestorProducto_Vitamina(
    @CodigoDBarras  INT,  
    @Vitaminas VARCHAR(50),
    @StatementType NVARCHAR(50) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO Dbo.PRODUCTO_VITAMINA(CodigoDBarras,Vitaminas)
            VALUES(@CodigoDBarras,@Vitaminas);
        END

      IF @StatementType = 'SelectLista'
        BEGIN
            SELECT *
            FROM   Dbo.PRODUCTO_VITAMINA
        END

        IF @StatementType = 'SelectEspecifico'
        BEGIN
            SELECT *
            FROM Dbo.PRODUCTO_VITAMINA  
            WHERE  CodigoDBarras=@CodigoDBarras AND Vitaminas=@Vitaminas
        END  

      IF @StatementType = 'Update'
        BEGIN
            UPDATE Dbo.PRODUCTO_VITAMINA
            SET CodigoDBarras =@CodigoDBarras,
                Vitaminas =@Vitaminas
            WHERE  CodigoDBarras=@CodigoDBarras AND Vitaminas=@Vitaminas
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            DELETE FROM Dbo.PRODUCTO_VITAMINA
            WHERE  CodigoDBarras=@CodigoDBarras AND Vitaminas=@Vitaminas
        END
  END