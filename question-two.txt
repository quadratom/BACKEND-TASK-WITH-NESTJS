QUESTION 2
ENTITY RELATIONSHIP DIAGRAM

'''To represent the entities in the problem (merchants and products), we can create two tables: Merchants and Products. Here's a simple Entity-Relationship Diagram (ERD) for the database design:

+--------------+       +--------------+
|   Merchants  |       |   Products   |
+--------------+       +--------------+
| merchantId   | 1    *| skuId        |
| name         |       | name         |
| ...          |       | description  |
+--------------+       | price        |
                       | merchantId   |  *--------|----- 1  +--------------+
                       +--------------+                     |   Merchants  |
                                                             +--------------+
                                                             