/************************************************************************************************
   Nombre:    up_PagoNutri     
  
   Proposito: crea un tabla para el pago manual de todos los nuticionistas
   
   REVISIONES:
   Ver          Fecha           Autor                       Descripcion
   ---------    --------        --------------              ------------------------
   1.0          9/11/2021       Gabriel conejo valerio      1. Creacion de la funcion			


   Notas: 
        tipo 1 es semanal el pago es $1 * total de clientes asociados al nutri 
        tipo 2 es mensual el pago es ($1 * total de clientes asociados al nutri )*0.95
        tipo 3 es anual el pago es ($1 * total de clientes asociados al nutri )*0.9
*************************************************************************************************/

CREATE PROCEDURE up_PagoNutri
AS
BEGIN
        SELECT  
        dbo.PUEDE_TENER.CodigoNutricionista,
        dbo.NUTRICIONISTA.TipoCobro,
        dbo.NUTRICIONISTA.Correo,
        dbo.NUTRICIONISTA.Nombre1,
        dbo.NUTRICIONISTA.Nombre2,
        dbo.NUTRICIONISTA.Apellido1,
        dbo.NUTRICIONISTA.Apellido2,
        dbo.NUTRICIONISTA.NumeroTarjetacredito,

        COUNT(dbo.PUEDE_TENER.CodigoNutricionista) AS montoTotal,
        CASE 
            WHEN dbo.NUTRICIONISTA.TipoCobro >1 THEN 'Si hay descuento'
            ELSE 'No hay descuento' 
        END AS descuento,
        CASE 
            WHEN dbo.NUTRICIONISTA.TipoCobro =3 THEN COUNT(dbo.PUEDE_TENER.CodigoNutricionista)*0.90
            WHEN dbo.NUTRICIONISTA.TipoCobro =2 THEN COUNT(dbo.PUEDE_TENER.CodigoNutricionista)*0.95
            ELSE COUNT(dbo.PUEDE_TENER.CodigoNutricionista) 
        END AS montoACobrar
        
        FROM dbo.PUEDE_TENER
        JOIN dbo.NUTRICIONISTA ON dbo.PUEDE_TENER.CodigoNutricionista=dbo.NUTRICIONISTA.CodigoNutricionista
        GROUP BY dbo.PUEDE_TENER.CodigoNutricionista,dbo.NUTRICIONISTA.TipoCobro,dbo.NUTRICIONISTA.Correo, dbo.NUTRICIONISTA.Nombre1,
        dbo.NUTRICIONISTA.Nombre2,
        dbo.NUTRICIONISTA.Apellido1,
        dbo.NUTRICIONISTA.Apellido2,
        dbo.NUTRICIONISTA.NumeroTarjetacredito;

  END