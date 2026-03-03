package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class CounterController {

    //An AtomicInteger can handle multiple visitors at once, where simple int can lose track. Makes it thread-safe.
    private final AtomicInteger mockCounter = new AtomicInteger((0));

    @GetMapping("/count")
    public Map<String, Integer> getCount() {
        return Map.of("count", mockCounter.incrementAndGet());
    }
}
