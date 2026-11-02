# Validación institucional pendiente

Este archivo **no se publica en el sitio** (está excluido del build vía `_config.yml`). Es un registro interno de
todo lo que falta confirmar antes de que este sitio pueda presentarse como la página oficial del Cuerpo de
Bomberos de Casablanca. Mientras un dato no esté aquí resuelto, la interfaz pública lo oculta en vez de mostrar
un placeholder.

| Página | Dato pendiente | Información actualmente disponible | Qué debe confirmar la institución | Prioridad |
|---|---|---|---|---|
| Directorio | Discrepancia en 3er Comandante | Tenemos "Marcos Morán A." (confirmado por Logan desde una planilla interna). Una sesión de la Cámara de Diputados de 2024 (fuente oficial, camara.cl) nombra a "Maximiliano Barrera" como 3er Comandante dando testimonio sobre el megaincendio 2024. | Confirmar si hubo un cambio de cargo entre 2024 y hoy, o cuál de los dos nombres es el correcto actualmente. | **Alta** |
| Directorio | Composición estatutaria exacta | Estructura (Superintendencia, Comandancia, Secretaría/Tesorería, Directores de Compañía) basada en la organización típica de un Cuerpo de Bomberos en Chile, con los 15 nombres que Logan confirmó. | Validar con los estatutos reales del Cuerpo que esta es la estructura oficial de cargos. | Media |
| Compañías — Primera | Capitán | Sin dato. | Nombre del Capitán actual de la Primera Compañía. | Media |
| Compañías — Brigada Las Dichas | Capitán, dirección/cuartel | Sin dato (sí tiene Director: Moisés Oyaneder). | Nombre del Capitán y dirección del cuartel. | Media |
| Compañías — Brigada Lagunillas | Escudo, fecha de fundación, dirección/cuartel, colores, especialidad | Solo tiene Director (Rubén Olivares) y Capitán (Claudio Ralil). | Todos los datos institucionales básicos de la brigada. | Media |
| Material Mayor | Listado completo de vehículos | Página publicada solo con una presentación institucional general; sin fichas individuales. | Por cada compañía/brigada: tipo de carro, identificación, año, función y características técnicas, idealmente con fotografía. | **Alta** |
| Galería | Fotografías reales | Sección publicada sin fotos, con mensaje de "próximamente". | Fotos reales y autorizadas del Cuerpo (no de otros cuerpos de bomberos). El lightbox del código ya está listo para recibirlas. | **Alta** |
| Historia | Reseña institucional completa | No publicada (se retiró el placeholder). | Texto de reseña histórica: orígenes, crecimiento, hechos destacados. | Media |
| Historia | Emergencias históricas / aniversarios adicionales | Solo están los hitos fundacionales de cada compañía/brigada y la acreditación forestal 2025. | Otros hitos relevantes que el Cuerpo quiera destacar (emergencias importantes, reconocimientos). | Baja |
| Inicio — "¿Qué Hacemos?" | Especialidades/equipos reales | Lista genérica de áreas de servicio típicas de un Cuerpo de Bomberos en Chile. | Confirmar cuáles de esas especialidades tiene realmente el Cuerpo de Casablanca (y si falta alguna, como HAZMAT, rescate en altura, etc.). | Media |
| Política de Privacidad | Validación jurídica | Borrador base conforme a la Ley N° 19.628. | Revisión y validación formal por la directiva del Cuerpo antes de publicar como política definitiva; ajustar cuando entre en vigencia la Ley N° 21.719 (diciembre de 2026). | Media |
| Todas las páginas de compañía/brigada | Reseña histórica individual | No publicada. | Texto de reseña por unidad (fundación, hitos, anécdotas relevantes). | Baja |
| General | Dominio definitivo | Sitio en `bomberoscasablanca.devquad.cl` (subdominio de demo). | Fecha de migración a `www.bomberoscasablanca.cl` una vez que el Cuerpo apruebe el sitio. | Baja (futuro) |

## Cómo usar este archivo

Cuando se confirme un dato:
1. Agrégalo al include o página correspondiente (ver los comentarios `NOTA INTERNA` en el código de cada archivo).
2. Elimina la fila correspondiente de esta tabla.
3. Si el dato afecta a varias páginas (ej. un nombre de directorio), revisa coherencia en todas.
