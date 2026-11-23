# **PARTE I. AVISO DE PRIVACIDAD**

## **1\. Identidad y domicilio del responsable**

El **Equipo AntFish** (en adelante, "AntFish", "nosotros" o "el Responsable") es responsable del tratamiento de los datos personales recabados a través de la aplicación móvil AntFish y de su API REST, conforme a la legislación mexicana en materia de protección de datos personales en posesión de los particulares.

* **Correo electrónico de contacto:** antfish-soporte@gmail.com  
* **Domicilio:** Carretera Tuxtla Gutiérrez \- Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chiapas, México

## **2\. ¿Qué es AntFish?**

AntFish es una aplicación móvil (Android e iOS) que analiza mensajes SMS y URLs sospechosas para estimar su nivel de riesgo de phishing o smishing. Para ello combina un motor propio de reglas heurísticas con servicios externos de inteligencia de amenazas, y devuelve una puntuación de 0 a 100 con un semáforo de riesgo (bajo, medio, alto o crítico), los hallazgos detectados y recomendaciones.

## **3\. Datos personales que recabamos**

### **3.1 Datos de la cuenta**

| Dato | Finalidad |
| ----- | ----- |
| Correo electrónico | Identificar la cuenta, iniciar sesión, verificar la cuenta y recuperar la contraseña |
| Nombre | Personalizar la experiencia dentro de la app |
| Contraseña (solo registro local) | Autenticación. **Nunca se almacena en texto plano**: se guarda únicamente su hash con el algoritmo Argon2id |
| Identificador de Google (`google_sub`) (solo inicio de sesión con Google) | Vincular la cuenta con Google Sign-In |
| Estado de la cuenta, fecha de registro y de verificación | Gestión y seguridad de la cuenta |

### **3.2 Datos de uso del servicio**

* **Historial de análisis:** tipo de entrada (SMS o URL), puntuación, nivel de riesgo, hallazgos detectados, fecha del análisis, resultados de las fuentes consultadas y las **URLs extraídas** del contenido analizado.  
* **Métricas personales:** número total de análisis, desglose entre SMS y URLs y cantidad de amenazas detectadas, mostrados en tu panel.

### **3.3 Contenido que envías para análisis**

* **Texto de mensajes SMS o URLs** que tú decides enviar. Este contenido viaja de forma cifrada (HTTPS/TLS) hasta nuestro servidor para ser procesado.  
* **El texto del SMS no se guarda en nuestra base de datos.** Se procesa en la memoria del servidor durante el análisis y después se descarta. De él solo se conservan:  
  * Un **hash irreversible** del mensaje (HMAC-SHA256 con un secreto del servidor), que no permite reconstruir el texto.  
  * Hasta **2 URLs extraídas**, en forma normalizada: se conserva el dominio y la ruta, y se **descartan** los parámetros de consulta (query string), los fragmentos y la información de usuario incrustada en el enlace.

> **Recomendación:** evita enviar mensajes que contengan información sensible innecesaria (números de tarjeta, contraseñas, códigos de un solo uso). Para el análisis solo necesitamos el contenido sospechoso.

### **3.4 Datos técnicos**

* **Dirección IP:** se utiliza de forma temporal para limitar intentos de autenticación (control de abuso). Esta clave se guarda en memoria (Redis) por aproximadamente **60 segundos**.  
* **Tokens de sesión (JWT):** se almacenan en tu dispositivo, en el almacenamiento seguro del sistema operativo.

### **3.5 Datos que NO recabamos**

AntFish **no** accede a tu bandeja de SMS ni a tus contactos, y no lee tus mensajes de forma automática. Solo se analiza lo que tú pegas o compartes voluntariamente con la app. No recabamos datos sensibles en los términos de la ley de la materia (salud, origen racial, creencias religiosas, orientación sexual, etc.).

## **4\. Finalidades del tratamiento**

**Finalidades primarias (necesarias para el servicio):**

1. Crear y administrar tu cuenta y autenticarte.  
2. Analizar los SMS y URLs que envías y entregarte un diagnóstico de riesgo.  
3. Mantener tu historial de análisis y tu panel de estadísticas.  
4. Verificar tu correo electrónico y permitir la recuperación de tu contraseña.  
5. Proteger el servicio contra abuso, fraude y accesos no autorizados.  
6. Optimizar el rendimiento mediante una caché de reputación de URLs.

**Finalidades secundarias:** AntFish **no utiliza** tus datos para publicidad, perfilado comercial ni venta a terceros.

## **5\. Transferencias y servicios de terceros**

AntFish **no vende ni comparte tus datos personales con terceros con fines comerciales**. Para prestar el servicio utilizamos proveedores tecnológicos que intervienen en el tratamiento:

| Tercero | Para qué se usa | Datos involucrados |
| ----- | ----- | ----- |
| **Google Web Risk** | Verificar la reputación de URLs | URL normalizada |
| **VirusTotal** | Verificar la reputación de URLs | URL normalizada |
| **PhishTank** | Verificar la reputación de URLs | URL normalizada |
| **Google Sign-In** | Inicio de sesión con Google | Token de identidad de Google, correo y nombre |
| **Resend** | Envío de códigos de verificación por correo | Correo electrónico y código de verificación |
| **Vercel** | Alojamiento del frontend web | Datos técnicos de conexión propios del servicio |
| **Amazon Web Services (AWS)** | Alojamiento del backend (API y bases de datos) | Datos descritos en este aviso |

Estos servicios tienen sus propias políticas de privacidad, sobre las cuales AntFish no tiene control.

Los servicios de reputación reciben **únicamente URLs**, no el texto completo de tus mensajes.

**Transferencias internacionales:** algunos de estos proveedores, entre ellos AWS, pueden tratar datos fuera de México, la región de AWS donde está alojado el backend: us-east-1

## **6\. Conservación de los datos**

| Información | Plazo de conservación |
| ----- | ----- |
| Historial de análisis | Hasta que tú borres cada análisis o elimines tu cuenta (no hay expiración automática) |
| Respuestas crudas de las APIs de reputación | **30 días** y luego se eliminan automáticamente |
| Texto original del SMS | **No se conserva** |
| Cuentas registradas que no completan la verificación del correo | Se eliminan automáticamente a las **48 horas** |
| Códigos de verificación | **10 minutos** de vigencia, solo en memoria temporal |
| Clave temporal de control por IP | Aproximadamente **60 segundos** |
| Caché de reputación de URLs | Temporal (vigencia limitada), sin asociarse a tu identidad |

## **7\. Derechos ARCO y cómo ejercerlos**

Tienes derecho a **Acceder, Rectificar, Cancelar u Oponerte** al tratamiento de tus datos personales, así como a **revocar tu consentimiento** y a **limitar su uso o divulgación**.

* **Cancelación inmediata desde la app:** puedes borrar análisis individuales y **eliminar tu cuenta** directamente desde la aplicación. Al eliminar tu cuenta, tus datos asociados (historial y métricas) se borran y tu registro de usuario se **anonimiza** (el correo se sustituye por un identificador genérico y se eliminan el nombre, la contraseña y el vínculo con Google). La eliminación requiere que confirmes tu identidad nuevamente.  
* **Otras solicitudes (acceso, rectificación, oposición, revocación):** envía un correo a **antfish-soporte@gmail.com** con el asunto "Derechos ARCO", indicando tu nombre, el correo de tu cuenta y una descripción clara de tu solicitud. Es posible que te pidamos confirmar tu identidad.  
* **Plazo de respuesta:** procuraremos responder en un máximo de **20 días hábiles** contados a partir de la recepción de tu solicitud.

Si consideras que tu derecho a la protección de datos ha sido vulnerado, puedes acudir ante la autoridad competente en materia de protección de datos personales en México.

## **8\. Medidas de seguridad**

Aplicamos medidas técnicas razonables para proteger tus datos, entre ellas:

* Comunicaciones cifradas con HTTPS/TLS.  
* Contraseñas protegidas con hash Argon2id.  
* Autenticación mediante tokens JWT (acceso y renovación).  
* Códigos de verificación protegidos con hash y de vida corta.  
* Almacenamiento seguro de tokens en el dispositivo.  
* Normalización de URLs para no conservar parámetros potencialmente sensibles.  
* Límite de intentos de autenticación para prevenir abuso.

Ningún sistema es completamente invulnerable. Dado que AntFish es un proyecto escolar, no podemos garantizar una seguridad absoluta, pero nos comprometemos a notificarte oportunamente si ocurre una vulneración que afecte significativamente tus derechos.

## **9\. Menores de edad**

La aplicación puede ser utilizada por cualquier persona. No obstante, **las personas menores de 18 años deben contar con el consentimiento, autorización y supervisión de su madre, padre, tutor o representante legal** para registrarse y utilizar AntFish.

**El Equipo AntFish no se hace responsable del uso de la aplicación por parte de menores de edad sin el consentimiento de sus padres o tutores**, ni de los datos que dichos menores proporcionen sin dicha autorización. El registro y uso de la app implica la declaración de que, si el usuario es menor de edad, cuenta con la autorización correspondiente.

Si identificamos que se han recabado datos de un menor sin autorización de sus padres o tutores, procederemos a eliminarlos. Los padres o tutores pueden solicitarlo escribiendo a **antfish-soporte@gmail.com**.

## **10\. Cookies y tecnologías de rastreo**

Hasta donde tenemos conocimiento, el backend de AntFish **no integra** servicios de analíticas, publicidad ni reporte de fallos de terceros.

## **11\. Cambios al aviso de privacidad**

Podemos modificar este aviso por cambios legales, técnicos o del proyecto. Publicaremos la versión actualizada en la aplicación indicando la fecha de última actualización. Si los cambios son sustanciales, te lo notificaremos por la app o por correo electrónico.

## **12\. Consentimiento**

Al crear una cuenta, iniciar sesión o utilizar AntFish, declaras haber leído este Aviso de Privacidad y otorgas tu consentimiento para el tratamiento de tus datos conforme a lo aquí descrito.
