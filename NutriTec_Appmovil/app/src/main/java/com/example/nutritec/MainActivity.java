package com.example.nutritec;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void ingresar(View view) {
        Intent menu = new Intent(this, principal.class);
        menu.putExtra("usuario", "prueba");
        startActivity(menu);
    }

}
