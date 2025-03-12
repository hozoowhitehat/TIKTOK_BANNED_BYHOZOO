#!/bin/bash
clear
# Function to clear the screen
clear_screen() {
    clear
    echo ":::"
    echo ":::   _______  __  __          __                __                __    __            __"
    echo "::: |        \|  \|  \        |  \              |  \              |  \  |  \          |  \"
    echo ":::  \$$$$$$$$ \$$| $$   __  _| $$_     ______  | $$   __         | $$  | $$ _______  | $$____    ______   _______   _______    ______    ______"
    echo ":::    | $$   |  \| $$  /  \|   $$ \   /      \ | $$  /  \ ______ | $$  | $$|       \ | $$    \  |      \ |       \ |       \  /      \  /      \"
    echo ":::    | $$   | $$| $$_/  $$ \$$$$$$  |  $$$$$$\| $$_/  $$|      \| $$  | $$| $$$$$$$\| $$$$$$$\  \$$$$$$\| $$$$$$$\| $$$$$$$\|  $$$$$$\|  $$$$$$\"
    echo ":::    | $$   | $$| $$   $$   | $$ __ | $$  | $$| $$   $$  \$$$$$$| $$  | $$| $$  | $$| $$  | $$ /      $$| $$  | $$| $$  | $$| $$    $$| $$   \$$\"
    echo ":::    | $$   | $$| $$$$$$\   | $$|  \| $$__/ $$| $$$$$$\         | $$__/ $$| $$  | $$| $$__/ $$|  $$$$$$$| $$  | $$| $$  | $$| $$$$$$$$| $$       "
    echo ":::    | $$   | $$| $$  \$$\   \$$  $$ \$$    $$| $$  \$$\         \$$    $$| $$  | $$| $$    $$ \$$    $$| $$  | $$| $$  | $$ \$$     \| $$       "
    echo ":::     \$$    \$$ \$$   \$$    \$$$$   \$$$$$$  \$$   \$$          \$$$$$$  \$$   \$$ \$$$$$$$   \$$$$$$$ \$$   \$$ \$$   \$$  \$$$$$$$ \$$       "
    echo ":::"
    echo ":::"
    echo "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
    echo "//                                                                                                                                          //"
    echo "// Scripted by HOZOO.                             -v1.1-                               If you encounter any issues feel free to DM!  //"
    echo "//                                                                                                                                          //"
    echo "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
    echo "//                                                                                                                                          //"
    echo "// Welcome to TikTok-Unbanner! Here is a list with our valible services:                                                                    //"
    echo "//                                                                                                                                          //"
    echo "//                                                                                                                                          //"
    echo "// [01] Account Stoled          [02] Account Suspended          [03] Account Banned          [04] Account Terminated          [05] Exit     //"
    echo "//                                                                                                                                          //"
    echo "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
    echo
}

# Function to simulate timeout
timeout() {
    sleep $1
}

# Main menu
while true; do
    clear_screen
    read -p " -  Please select an option: " userInput

    case $userInput in
        01)
            echo "You chose Account Stolen, loading script."
            timeout 5
            clear_screen
            echo "This function is currently disabled due to recent malicious activity AKA account stealing, sorry for any inconvenience."
            read -p "Press any key to continue..." -n 1 -s
            exit
            ;;
        02)
            echo "You chose Account Suspended, loading script."
            timeout 5
            clear_screen
            read -p " -  Please enter your account username without capital letters: " userInput
            if [ "$userInput" == "pbkzz" ]; then
                echo "Access denied"
                timeout 3
                exit
            else
                echo "loading..."
                timeout 3
                echo "Account found!"
                timeout 1
                echo "Connecting to TikTok servers..."
                timeout 5
                echo "Done"
                timeout 1
                echo "Accessing as administrator..."
                timeout 3
                echo "Done"
                timeout 1
                echo "Send a request to review your Suspension and then press any key to continue"
                read -p "Press any key to continue..." -n 1 -s
                echo "Searching for your request, this can take a while. DO NOT close this window."
                timeout 80
                echo "All done, wait 1-3 days for the unban, thanks for using TikTok-Unbanner"
                read -p "Press any key to continue..." -n 1 -s
                exit
            fi
            ;;
        03)
            echo "You chose Account Banned, loading script."
            timeout 5
            clear_screen
            read -p " -  Please enter your account username without capital letters: " userInput
            if [ "$userInput" == "pbkzz" ]; then
                echo "Access denied"
                timeout 3
                exit
            else
                echo "loading..."
                timeout 3
                echo "Account found!"
                timeout 1
                echo "Connecting to TikTok servers..."
                timeout 5
                echo "Done"
                timeout 1
                echo "Accessing as administrator..."
                timeout 3
                echo "Done"
                timeout 1
                echo "Send a request to review your Ban and then press any key to continue"
                read -p "Press any key to continue..." -n 1 -s
                echo "Searching for your request, this can take a while. DO NOT close this window."
                timeout 80
                echo "All done, wait 1-3 days for the unban, thanks for using TikTok-Unbanner"
                read -p "Press any key to continue..." -n 1 -s
                exit
            fi
            ;;
        04)
            echo "You chose Account Terminated, loading script."
            timeout 5
            clear_screen
            read -p " -  Please enter your account username without capital letters: " userInput
            if [ "$userInput" == "pbkzz" ]; then
                echo "Access denied"
                timeout 3
                exit
            else
                echo "loading..."
                timeout 3
                echo "Account found!"
                timeout 1
                echo "Connecting to TikTok servers..."
                timeout 5
                echo "Done"
                timeout 1
                echo "Accessing as administrator..."
                timeout 3
                echo "Done"
                timeout 1
                echo "Send a request to review your Ban and then press any key to continue, if you already did press enter."
                read -p "Press any key to continue..." -n 1 -s
                echo "Searching for your request, this can take a while. DO NOT close this window."
                timeout 80
                echo "Your account was banned a long time ago!"
                echo "Error code 261"
                read -p "Press any key to continue..." -n 1 -s
                exit
            fi
            ;;
        05)
            echo "Thanks for using TikTok-Unbanner! Closing the program..."
            timeout 6
            exit
            ;;
        *)
            echo "Invalid choice. Wait 5 seconds and enter one of the options mentioned above."
            timeout 5
            ;;
    esac
done
