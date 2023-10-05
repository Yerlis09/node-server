# Uso de Async/Await vs Método then() en JavaScript

## Pregunta 1: ¿Qué sucedió al usar async y await?

Al utilizar async y await en el código, se logró simplificar la estructura del programa y hacerlo más legible. El uso de async y await permite que las funciones asíncronas parezcan síncronas en su estructura, lo que facilita la comprensión del flujo del programa. Además, con async y await, se pueden gestionar las promesas de manera más natural, lo que evita la anidación excesiva de callbacks y mejora la legibilidad del código.

## Pregunta 2: ¿Qué sucedió al usar el método then()?

Cuando se utilizó el método then() en lugar de async y await, el código se volvió más complicado y menos legible. La anidación de llamadas al método then() para manejar las promesas puede resultar en un código más difícil de seguir, especialmente cuando hay múltiples promesas anidadas. Aunque el método then() sigue siendo útil para gestionar promesas, puede ser menos intuitivo y más propenso a errores humanos.

## Pregunta 3: ¿Qué diferencias encontraste entre async, await y el método then()?

Las principales diferencias entre async/await y el método then() son las siguientes:

1. Legibilidad: Async y await tienden a mejorar la legibilidad del código, ya que el flujo de ejecución parece síncrono, lo que facilita el seguimiento del programa. El método then() puede resultar en código más complejo y menos legible debido a la anidación de llamadas.

2. Anidación: El método then() tiende a requerir una anidación profunda de callbacks para manejar múltiples promesas, lo que puede ser propenso a errores y dificultar el seguimiento del flujo de ejecución. Con async/await, la anidación se reduce considerablemente.

3. Manejo de errores: Con async/await, los errores se manejan de manera más natural con try/catch, lo que facilita la identificación y el manejo de problemas. El método then() suele requerir el uso de .catch() al final de la cadena then() para capturar errores.

4. Simplicidad: En general, async/await tiende a hacer que el código sea más simple y más claro, mientras que el método then() puede dar lugar a una estructura más compleja y confusa.

En resumen, async y await suelen ser una opción preferida para gestionar promesas en JavaScript debido a su capacidad para simplificar el código y mejorar la legibilidad en comparación con el método then().
