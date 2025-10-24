package com.Logistics.LogisticsBackend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ansi.AnsiColor;
import org.springframework.boot.ansi.AnsiOutput;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class ApplicationStartupRunner implements ApplicationListener<ApplicationReadyEvent> {

    private static final Logger logger = LoggerFactory.getLogger(ApplicationStartupRunner.class);

    @Override
    public void onApplicationEvent(final ApplicationReadyEvent event) {
        String message = " :D UrbanSync Backend is now running and ready to go! :D ";
        String border = "=".repeat(message.length());
        logger.info(AnsiOutput.toString(AnsiColor.GREEN, border));
        logger.info(AnsiOutput.toString(AnsiColor.GREEN, message));
        logger.info(AnsiOutput.toString(AnsiColor.GREEN, border));
    }
}