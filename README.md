# Tarjeta de crédito válida

## Creado por Cynthia Isla

En este README se detalla el funcionamiento de la validación de una tarjeta de crédito con el algoritmo de Luhn. 

Este README contiene:

  - Pseudocódigo
  - Diagrama de flujo

### Pseudocódigo

```
Funcion isValidCard (cardNumber)
    solicitar numero de tarjeta
    si ingresa un campo vacío o letras
    arroja un error y vuelve a solicitar numero de tarjeta

    recorre el largo de cardNumber y se guarda en el 
    array cardNumber

    revierto el array con reverse() y formo uno nuevo reverseArray

    var cont=1
    var sumTotal
    recorro reverseArray
        si el contador es par
            el valor lo multiplico por 2 y lo ingreso al array posPar
        sino se ingresa el valor al array posImpar   
        aumento el contador en 1

    al array posPar le aplico join() para juntarlo y split() para separar los valore

    en arrFinal concateno el array posPar y posImpar

    recorro el array arrFinal y sumo los valores calculados con el mod valor%10, almaceno en variable sumTotal

    si sumTotal se iguala a cero
        retorna un alert con la frase "la tarjeta es válida"
    sino
        retorna un alert con la frase "la tarjeta es inválida"    

llamar a funcion isValidCard()

fin Algoritmo



```

### Diagrama de flujo

![Diagrama de flujo tarjeta de credito](http://subirimagen.me/uploads/20171005085209.png)

[Diagrama de flujo](http://subirimagen.me/uploads/20171005085209.png)

####Esta es la versión `0.0.1`
