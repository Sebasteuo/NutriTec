package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class menu extends AppCompatActivity {

    private TextView tvCab;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);

        tvCab = (TextView)findViewById(R.id.TV_cabeza);
        String dato= "Bienvenido " + getIntent().getStringExtra("usuario");
        tvCab.setText(dato);


    }
}