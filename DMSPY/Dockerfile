FROM python:3.10.0a6-buster

COPY serial_sqlwriter.py /

RUN pip install pyserial

ENTRYPOINT [ "python", "./serial_sqlwriter.py" ]