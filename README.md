# Pasquale Mazzei - Test MyTi

## Pre-requisites
NodeJS v12 or superior (v16 recommended)

## Fase 1

The algorithm converts the number to string arrays,in order to be able to surpass the limitations on maximum integer calculations on NodeJS

To execute:

```
node fase_1
```

## Fase 2

The algorithm stablishes a Student class with a proper constructor, as well the age and agv_grade methods.
In particular, the age considers the epoch time in order to correctly calculate the age, respecting leap years as well

To execute:

```
node fase_2
```

## Fase 3

I created a module using HTTP standard library from NodeJS, creating an API from scratch

To execute:

```
node fase_3
```

To call the endpoint,it must be used a bash-compatible terminal, like GitBash or any Linux/Mac standard terminal

### Reading students (GET)

```bash
curl http://localhost:8080/students
```

### Adding students (POST)

```bash
curl -X POST -H "Content-Type: application/json" -d '{"firstname": "Pasquale","lastname": "Mazzei","birthdate": "08/03/1988","grades": "10,9,5,8.59,10"}' http://localhost:8080/students
```
