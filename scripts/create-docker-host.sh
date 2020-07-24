 #!/bin/bash

EXIT_SCRIPT="false"

while [ "$EXIT_SCRIPT" == "false" ]
do
    # Setting default values
    MACHINE_NAME="hologram-mart"
    NEW_OR_EXISTING="new"

    # Setting machine name dynamically
    if [ "${DESIRED_MACHINE_NAME}" == "" ]
    then
        if [ "$1" == "" ]
        then
            read -p ">> enter desired machine name: ( $MACHINE_NAME ) " DESIRED_MACHINE_NAME
        else
            DESIRED_MACHINE_NAME="$1"
        fi

        if [ "$DESIRED_MACHINE_NAME" == "" ]
        then
            DESIRED_MACHINE_NAME="$MACHINE_NAME"
        fi
    fi

    MACHINE_NAME="$DESIRED_MACHINE_NAME"

    # Setting mode dynamically
    if [ !"${MODE}" ]
    then
        if [ "$2" == "" ]
        then
            read -p ">> enter desired mode: ( $NEW_OR_EXISTING ) " DESIRED_MODE
        else
            DESIRED_MODE="$2"
        fi

        if [ "$DESIRED_MODE" == "" ]
        then
            DESIRED_MODE="$NEW_OR_EXISTING"
        fi
    fi

    NEW_OR_EXISTING="$DESIRED_MODE"

    if [ "${NEW_OR_EXISTING}" == "new" ]
    then
        read -p ">> Please, enter digitalocean-access-token: " DIGITALOCEAN_ACCESS_TOKEN
        docker-machine create --driver digitalocean --digitalocean-access-token ${DIGITALOCEAN_ACCESS_TOKEN} ${MACHINE_NAME}
        EXISTING_MACHINE_IP_ADDRESS=docker-machine ip $MACHINE_NAME
        if [ "$DIGITALOCEAN_ACCESS_TOKEN" != "" ]
        then
            EXISTING_MACHINE_IP_ADDRESS="1.1.1.1"
            echo ">> creating new machine named '$MACHINE_NAME' on digitalocean @ $EXISTING_MACHINE_IP_ADDRESS"
            EXIT_SCRIPT="true"
        else
            echo ">> Incorrect entry"
        fi
    elif [ "${NEW_OR_EXISTING}" == "existing" ]
    then
        read -p ">> Please, enter existing host IP address: " GENERIC_IP_ADDRESS
        if [ "$GENERIC_IP_ADDRESS" != "" ]
        then
            docker-machine create --driver generic --generic-ip-address=${GENERIC_IP_ADDRESS} --generic-ssh-key ~/.ssh/id_rsa ${MACHINE_NAME} && \
            echo ">> creating new machine named '$MACHINE_NAME' using existing host @ $GENERIC_IP_ADDRESS"
            EXIT_SCRIPT="true"
        else

            echo ">> Incorrect entry"
        fi
    else
        echo ">> Incorrect entry <<"
    fi
done

echo ">> You're all set up, go on now!"

# run this command to exit docker host
# eval "$(docker-machine env -u)"