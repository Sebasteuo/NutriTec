/************************************************************************************************
   Nombre:    up_AprobacionProductos     
  
   Proposito: procedimiento para aprobar todos los productos o uno especificos  o negar uno en especifico
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          11/11/2021       Gabriel conejo valerio      1. Creacion de procedimiento			


   Notas:para actualizar los productos se usan los siguentes comando
   todos: aprueba todos los productos 
   especifico:aprueba un producto en especifico
   Negarespecifico:niega un producto en especifico 



*************************************************************************************************/
CREATE PROCEDURE up_AprobacionProductos(
    @CodigoDBarras INT,
    @StatementType NVARCHAR(50) = '')
AS
    BEGIN
        IF @StatementType = 'todos'
            UPDATE dbo.PRODUCTO
            SET Aprobado=1
            WHERE Aprobado =0;
        END

        IF @StatementType = 'especifico'
            UPDATE dbo.PRODUCTO
            SET Aprobado=1
            WHERE CodigoDBarras =@CodigoDBarras;
        END

        IF @StatementType = 'Negarespecifico'
            UPDATE dbo.PRODUCTO
            SET Aprobado=2
            WHERE CodigoDBarras =@CodigoDBarras;
        END


    END