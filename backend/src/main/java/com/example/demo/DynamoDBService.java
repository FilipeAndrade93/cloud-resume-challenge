package com.example.demo;

import org.springframework.stereotype.Service;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;
import software.amazon.awssdk.services.dynamodb.model.ReturnValue;
import software.amazon.awssdk.services.dynamodb.model.UpdateItemRequest;

import java.util.Map;

@Service
public class DynamoDBService {

    private final DynamoDbClient ddb = DynamoDbClient.builder()
            .region(Region.EU_NORTH_1)
            .build();

    private final String tableName = "visitor_counter";

    public int getAndIncrementCount() {
        //Tell AWS to add 1 and return the new number
        UpdateItemRequest request = UpdateItemRequest.builder()
                .tableName(tableName)
                .key(Map.of("id", AttributeValue.builder().s("v-count").build()))
                .updateExpression("SET visitor_count = if_not_exists(visitor_count, :zero) + :inc")
                .expressionAttributeValues(Map.of(
                        ":inc", AttributeValue.builder().n("1").build(),
                        ":zero", AttributeValue.builder().n("0").build()
                ))
                .returnValues(ReturnValue.UPDATED_NEW)
                .build();

        Map<String, AttributeValue> response = ddb.updateItem(request).attributes();
        return  Integer.parseInt(response.get("visitor_count").n());
    }
}
